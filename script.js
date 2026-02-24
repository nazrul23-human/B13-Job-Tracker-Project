const jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        role: "React Native Developer",
        info: "Remote • Full-time • $130k - $175k",
        description: "Build cross-platform mobile apps.",
        status: "all"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        info: "Los Angeles • Part-time • $80k - $120k",
        description: "Design and build websites.",
        status: "all"
    },
    {
        id: 3,
        company: "Mobile First Corp",
        role: "React Native Developer",
        info: "Remote • Full-time • $130k - $175k",
        description: "Build cross-platform mobile apps.",
        status: "all"
    },
    {
        id: 4,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        info: "Los Angeles • Part-time • $80k - $120k",
        description: "Design and build websites.",
        status: "all"
    },
    {
        id: 5,
        company: "Mobile First Corp",
        role: "React Native Developer",
        info: "Remote • Full-time • $130k - $175k",
        description: "Build cross-platform mobile apps.",
        status: "all"
    },
    {
        id: 6,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        info: "Los Angeles • Part-time • $80k - $120k",
        description: "Design and build websites.",
        status: "all"
    },
    {
        id: 7,
        company: "Mobile First Corp",
        role: "React Native Developer",
        info: "Remote • Full-time • $130k - $175k",
        description: "Build cross-platform mobile apps.",
        status: "all"
    },
    {
        id: 8,
        company: "WebFlow Agency",
        role: "Web Designer & Developer",
        info: "Los Angeles • Part-time • $80k - $120k",
        description: "Design and build websites.",
        status: "all"
    }

];

let currentTab = "all";

function switchTab(tab) {
    currentTab = tab;
    render();
}

function render() {
    const container = document.getElementById("cards");
    const empty = document.getElementById("empty");
    container.innerHTML = "";

    const filtered = jobs.filter(j => currentTab === "all" ? true : j.status === currentTab);

    document.getElementById("tabCount").textContent = filtered.length + " jobs";

    if (filtered.length === 0) {
        empty.classList.remove("hidden");
    } else {
        empty.classList.add("hidden");
    }

    filtered.forEach(job => {

        const card = document.createElement("div");
        card.className = "bg-gray-50 p-4 rounded border relative";

        // Top-right delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "absolute top-2 right-2 text-gray-400 hover:text-red-500";
        deleteBtn.onclick = () => deleteJob(job.id);
        card.appendChild(deleteBtn);

        // Job content
        const content = document.createElement("div");
        content.innerHTML = `
      <h3 class="font-bold text-blue-900">${job.company}</h3>
      <p class="text-gray-600">${job.role}</p>
      <p class="text-sm text-gray-500 mt-2">${job.info}</p>
      <p class="text-sm mt-2">${job.description}</p>

      <div class="flex gap-3 mt-4">
      <button onclick="setStatus(${job.id}, 'interview')" class="border border-green-500 text-green-600 px-3 py-1 rounded">
          INTERVIEW
        </button>
        <button onclick="setStatus(${job.id}, 'rejected')" class="border border-red-500 text-red-600 px-3 py-1 rounded">
          REJECTED
        </button>
      </div>
    `;
        card.appendChild(content);

        container.appendChild(card);
    });

    updateCounts();
}

function setStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    render();
}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
    render();
}

function updateCounts() {
    document.getElementById("allCount").textContent = jobs.length;
    document.getElementById("interviewCount").textContent = jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").textContent = jobs.filter(j => j.status === "rejected").length;
}

render();

