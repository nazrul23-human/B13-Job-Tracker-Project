const jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        type: "React Native Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Remote • Full-time • $130,000 - $175,000",
        filter: "Not Applied",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        type: "Web Designer & Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Los Angeles AC • Part-time • $80,000 - $120,000",
        filter: "Not Applied",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        type: "Data Visualization Specialist",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Boston, MA • Full-time •$125,000 - $165,000",
        filter: "Not Applied",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "all"

    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        type: "Backend Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Seattle, WA • Full-time • $140,000 - $190,000",
        filter: "Not Applied",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all"

    },
    {
        id: 5,
        companyName: "Innovation Labs",
        type: "UI/UX Engineer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Austin, TX • Full-time • $110,000 - $150,000",
        filter: "Not Applied",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "all"

    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        type: "JavaScript Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "New York, NY • Full-time • $130,000 - $170,00",
        filter: "Not Applied",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "all"

    },
    {
        id: 7,
        companyName: "StartupXYZ",
        type: "Full Stack Engineer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Remote • Full-time • $120,000 - $160,000",
        filter: "Not Applied",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "all"

    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        type: "Senior Frontend Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "San Francisco, CA • Full-time • $130,000 - $175,000",
        filter: "Not Applied",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "all"

    },
    {
        id: 9,
        companyName: "CloudFirst Inc",
        type: "Backend Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "Seattle, WA • Full-time • $140,000 - $190,000",
        filter: "Not Applied",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "all"

    },
    {
        id: 10,
        companyName: "TechCorp Industries",
        type: "Senior Frontend Developer",
        position: "Senior Engineer",
        location: "Dhaka",
        salary: "San Francisco, CA • Full-time • $130,000 - $175,000",
        filter: "Not Applied",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
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
        card.className = "bg-white p-4 rounded border relative";

        // Top-right delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete"
        deleteBtn.className = "absolute top-2 right-2 text-gray-500 hover:text-red-500";
        deleteBtn.onclick = () => deleteJob(job.id);
        card.appendChild(deleteBtn);

        // Job content
        const content = document.createElement("div");
        content.innerHTML = `
      <h3 class="font-bold text-blue-900">${job.companyName}</h3>
      <p class="text-gray-600">${job.type}</p>
      <p class="text-gray-600">${job.position}</p>
      <p class="text-gray-600">${job.location}</p>
      <p class="text-sm text-gray-500 mt-2">${job.salary}</p>
      <button class="text-green-600 bg-gray-200 px-2 py-1 mt-2">${job.filter}</button>
      <p class="text-sm mt-2">${job.description}</p>

      <div class="flex gap-3 mt-4">
      <button onclick="setStatus(${job.id}, 'interview')" class="border border-green-500 text-green-600 px-3 py-1 rounded  hover:bg-green-500 hover:text-white">
          INTERVIEW
        </button>
        <button onclick="setStatus(${job.id}, 'rejected')" class="border border-red-500 text-red-600 px-3 py-1 rounded  hover:bg-red-500 hover:text-white">
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

