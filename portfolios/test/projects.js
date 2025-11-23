// Simple "data" for your projects — just edit / add entries here.
const projects = [
    {
        title: 'Client Music Video — "Tell It Like It Is"',
        medium: 'Digital Video',
        date: '08/18/2021',
        type: 'Music Video',
        software: 'DaVinci Resolve & Premiere Pro',
        songTitle: 'Tell It Like It Is',
        artist: 'Keller Cox',
        thumbnail: 'tell-it-like-it-is-thumbnail.jpg',   // update to your actual path
        videoUrl: 'https://your-video-url.com',          // update to your actual URL
        credits: [
            { role: 'Director', name: 'Carlos Carrillo' },
            { role: 'Director of Photography', name: 'Anisah Khan' },
            { role: 'Camera Operator', name: 'Shelby Mathews' },
            { role: 'Audio Engineer', name: 'Carlos Carrillo' },
            { role: 'Grip / BTS', name: 'Katherine Damuth' },
            { role: 'Editor', name: 'Carlos Carrillo' },
            { role: 'Colorist', name: 'Carlos Carrillo' },
            { role: 'Mixing Engineer', name: 'Sam Ray' }
        ]
    },

    // Add more project objects here if needed
    {
        title: 'Client Music Video — "Tell It Like It Is"',
        medium: 'Digital Video',
        date: '08/18/2021',
        type: 'Music Video',
        software: 'DaVinci Resolve & Premiere Pro',
        songTitle: 'Tell It Like It Is',
        artist: 'Keller Cox',
        thumbnail: 'tell-it-like-it-is-thumbnail.jpg',   // update to your actual path
        videoUrl: 'https://your-video-url.com',          // update to your actual URL
        credits: [
            { role: 'Director', name: 'Carlos Carrillo' },
            { role: 'Director of Photography', name: 'Anisah Khan' },
            { role: 'Camera Operator', name: 'Shelby Mathews' },
            { role: 'Audio Engineer', name: 'Carlos Carrillo' },
            { role: 'Grip / BTS', name: 'Katherine Damuth' },
            { role: 'Editor', name: 'Carlos Carrillo' },
            { role: 'Colorist', name: 'Carlos Carrillo' },
            { role: 'Mixing Engineer', name: 'Sam Ray' }
        ]
    },

    {
        title: 'Client Music Video — "Tell It Like It Is"',
        medium: 'Digital Video',
        date: '08/18/2021',
        type: 'Music Video',
        software: 'DaVinci Resolve & Premiere Pro',
        songTitle: 'Tell It Like It Is',
        artist: 'Keller Cox',
        thumbnail: 'tell-it-like-it-is-thumbnail.jpg',   // update to your actual path
        videoUrl: 'https://your-video-url.com',          // update to your actual URL
        credits: [
            { role: 'Director', name: 'Carlos Carrillo' },
            { role: 'Director of Photography', name: 'Anisah Khan' },
            { role: 'Camera Operator', name: 'Shelby Mathews' },
            { role: 'Audio Engineer', name: 'Carlos Carrillo' },
            { role: 'Grip / BTS', name: 'Katherine Damuth' },
            { role: 'Editor', name: 'Carlos Carrillo' },
            { role: 'Colorist', name: 'Carlos Carrillo' },
            { role: 'Mixing Engineer', name: 'Sam Ray' }
        ]
    },

    {
        title: 'Client Music Video — "Tell It Like It Is"',
        medium: 'Digital Video',
        date: '08/18/2021',
        type: 'Music Video',
        software: 'DaVinci Resolve & Premiere Pro',
        songTitle: 'Tell It Like It Is',
        artist: 'Keller Cox',
        thumbnail: 'tell-it-like-it-is-thumbnail.jpg',   // update to your actual path
        videoUrl: 'https://your-video-url.com',          // update to your actual URL
        credits: [
            { role: 'Director', name: 'Carlos Carrillo' },
            { role: 'Director of Photography', name: 'Anisah Khan' },
            { role: 'Camera Operator', name: 'Shelby Mathews' },
            { role: 'Audio Engineer', name: 'Carlos Carrillo' },
            { role: 'Grip / BTS', name: 'Katherine Damuth' },
            { role: 'Editor', name: 'Carlos Carrillo' },
            { role: 'Colorist', name: 'Carlos Carrillo' },
            { role: 'Mixing Engineer', name: 'Sam Ray' }
        ]
    }
];

const grid = document.getElementById('projects-grid');

projects.forEach(project => {
  const article = document.createElement('article');
  article.className = 'cm-project-card';

  const creditsHtml = project.credits
    .map(c => `<li><strong>${c.role}:</strong> ${c.name}</li>`)
    .join('');

  article.innerHTML = `
    <a class="cm-thumb" href="${project.videoUrl}" target="_blank" rel="noopener">
      <img
        src="${project.thumbnail}"
        alt="Thumbnail for ${project.title}"
      />
      <div class="cm-thumb-overlay">
        <span class="cm-play-icon">▶</span>
      </div>
    </a>

    <div class="cm-card-body">
      <h2 class="cm-project-title">${project.title}</h2>

      <div class="cm-badges">
        <span class="cm-badge">${project.medium}</span>
        <span class="cm-badge">${project.date}</span>
        <span class="cm-badge">${project.type}</span>
      </div>

      <div class="cm-meta">
        <p><strong>Software:</strong> ${project.software}</p>
        <p><strong>Song:</strong> <em>${project.songTitle}</em> by ${project.artist}</p>
      </div>

      <div class="cm-credits">
        <h3>Credits</h3>
        <ul>
          ${creditsHtml}
        </ul>
      </div>
    </div>
  `;

  grid.appendChild(article);
});
