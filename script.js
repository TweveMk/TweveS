const mainLogo = "https://i.ibb.co/1t83h0Dn/x.jpg";

// Special logos
const specialLogos = {
  "Sony Max": "https://i.ibb.co/tpnRRNfn/x.jpg",
  "Sinema Zetu": "https://i.ibb.co/yFyd9pF2/x.jpg",
  "Azam Sports 1": "https://i.ibb.co/B24B9Qvp/x.jpg",
  "Al Jazeera": "https://i.ibb.co/Jwd8zGXb/x.jpg",
  "Azam Sports 4": "https://i.ibb.co/BKgbYmg8/x.jpg",
  "Wasafi": "https://i.ibb.co/LDXL5qWY/x.jpg",
  "Azam Two": "https://i.ibb.co/9HzfkSh7/x.jpg",
  "Azam Sports 2": "https://i.ibb.co/5CB8LHv/x.jpg",
  "UTV": "https://i.ibb.co/1GjLZkq2/x.jpg",
  "Azam One": "https://i.ibb.co/NdR0tdJz/x.jpg"
};

// Channel list
const channels = [
  {
    name: "AMC",
    src: "https://dash2.antik.sk/stream/nvidia_amc/playlist_cenc.mpd",
    key: "11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d",
    drm: "clearkey",
    category: "Movies"
  },
  {
    name: "AZAM SPORTS 1",
    src: "https://1375207669.rsc.cdn77.org/1375207669/index.mpd",
    key: "675c9741780f4b75b74d4bf08536084b:5bec79012cd8e84f3cfe6bee4992b4b7",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "AZAM ONE",
    src: "https://1647151410.rsc.cdn77.org/1647151410/index.mpd",
    key: "24bbf3ac7ba440948990e3b193b4eb98:b39279dfc0eaaef53570f9a6839a19c6",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "SINEMA ZETU",
    src: "https://1385876236.rsc.cdn77.org/1385876236/index.mpd",
    key: "fb284327047940c3ae17b263dc197488:c753256045313f48b652d3dbb920cd4f",
    drm: "clearkey",
    category: "Movies"
  },
  {
    name: "WASAFI TV",
    src: "https://1748194871.rsc.cdn77.org/1748194871/index.mpd",
    key: "d4f20ed444c8489396111f42b4e75c76:580c4cac54b256cefe8af5f55b93d0ec",
    drm: "clearkey",
    category: "Music"
  }
];

// Download-only movies
const downloadMovies = [
  {
    name: "Ghost",
    icon: "https://i.ibb.co/CK8rY52s/x.jpg",
    download: "https://drive.google.com/file/d/1OQ32dEF7eQnCtNVnx2M_V3iMqh6jH9p8/view?usp=drive_link",
    tags: ["HD", "Action"]
  },
  {
    name: "John Luther",
    icon: "https://i.ibb.co/0pbndhSQ/x.jpg",
    download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link",
    tags: ["HD", "Thriller"]
  },
  {
    name: "Deep cover",
    icon: "https://i.ibb.co/TMdkCYhb/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/6ae044c0-692f-40bd-95c5-0c99ab30f27a/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "SuperMan (Imetafsiriwa)",
    icon: "https://i.ibb.co/zhZY2mC0/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/90a38928-5c11-4526-ba09-02a02b5dbc85/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "Off the Grind",
    icon: "https://i.ibb.co/KpYny5HT/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/bb20ea3c-7f75-499c-9e92-eb0ac3ae1a2d/playlist.m3u8",
    tags: ["HD", "Drama"]
  },
  {
    name: "THUNDERBOLTS",
    icon: "https://i.ibb.co/mCYRvz1Q/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "Heard of State",
    icon: "https://i.ibb.co/xKY7mg0m/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8",
    tags: ["HD", "Drama"]
  },
  {
    name: "SHADOW FORCE",
    icon: "https://i.ibb.co/ZpJtxPVm/x.jpg",
    download: "https://vz-1bb50f2e-8ea.b-cdn.net/bde45d25-32bb-44cc-b00b-945ea7423c7d/playlist.m3u8",
    tags: ["HD", "Action"]
  }
];

// Add logos to channels
const channelsWithLogos = channels.map(ch => ({
  ...ch,
  logo: specialLogos[ch.name] || mainLogo
}));

// Initialize everything
async function init() {
  const video = document.getElementById('video');
  const pipButton = document.getElementById('pipButton');
  const videoContainer = document.getElementById('videoContainer');
  const channelListElement = document.getElementById('channelListLive');
  const btnLive = document.getElementById('btnLive');
  const btnMovies = document.getElementById('btnMovies');
  const liveSearch = document.getElementById('liveSearch');
  const noResults = document.getElementById('noResults');

  let currentQuery = "";
  let currentChannel = null;
  let zoomLevel = 1.0;
  let initialPinchDistance = null;

  // Styles
  video.style.width = '';
  video.style.height = '';
  video.style.objectFit = '';
  video.style.position = 'absolute';
  video.style.top = '50%';
  video.style.left = '50%';
  video.style.transform = 'translate(-50%, -50%)';
  video.style.transformOrigin = 'center center';
  videoContainer.style.position = 'relative';
  videoContainer.style.width = '100%';
  videoContainer.style.height = '100%';

  // Pinch zoom events
  function handleTouchStart(event) {
    if (event.touches.length === 2) {
      event.preventDefault();
      const [touch1, touch2] = event.touches;
      initialPinchDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
    }
  }
  function handleTouchMove(event) {
    if (event.touches.length === 2 && initialPinchDistance !== null) {
      event.preventDefault();
      const [touch1, touch2] = event.touches;
      const currentPinchDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      const scaleChange = currentPinchDistance / initialPinchDistance;
      let newZoom = zoomLevel * scaleChange;
      newZoom = Math.max(0.5, Math.min(3, newZoom));
      zoomLevel = newZoom;
      video.style.transform = `translate(-50%, -50%) scale(${zoomLevel})`;
      initialPinchDistance = currentPinchDistance;
    }
  }
  function handleTouchEnd(event) {
    if (event.touches.length < 2) initialPinchDistance = null;
  }

  videoContainer.addEventListener('touchstart', handleTouchStart);
  videoContainer.addEventListener('touchmove', handleTouchMove);
  videoContainer.addEventListener('touchend', handleTouchEnd);

  // Picture-in-Picture
  if (pipButton && !document.pictureInPictureEnabled) pipButton.style.display = 'none';
  if (pipButton) {
    pipButton.addEventListener('click', () => {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(console.error);
        zoomLevel = 1.0;
        video.style.transform = 'translate(-50%, -50%)';
      } else {
        zoomLevel = 1.0;
        video.style.transform = 'translate(-50%, -50%)';
        video.requestPictureInPicture().catch(console.error);
      }
    });
  }

  // Shaka setup
  shaka.polyfill.installAll();
  if (!shaka.Player.isBrowserSupported()) {
    alert('Your browser does not support Shaka Player.');
    return;
  }
  const player = new shaka.Player(video);
  const shakaUi = new shaka.ui.Overlay(player, videoContainer, video);
  shakaUi.configure({
    overflowMenuButtons: ['quality', 'language', 'captions', 'playback_rate', 'cast']
  });
  player.addEventListener('error', (e) => {
    console.error("Shaka Error:", e.detail);
    retryLoad();
  });

  async function loadChannel(channel) {
    currentChannel = channel;
    try {
      await player.attach(video);
      let clearKeys = {};
      if (channel.key && channel.key.includes(':')) {
        const [id, key] = channel.key.split(':');
        clearKeys[id] = key;
      }
      if (Object.keys(clearKeys).length > 0 && channel.drm === "clearkey") {
        player.configure({ drm: { clearKeys } });
      }
      await player.load(channel.src);
      video.muted = false;
      await video.play().catch(() => {});
    } catch (err) {
      console.error("Load error:", err);
      retryLoad();
    }
  }

  async function retryLoad() {
    if (!currentChannel) return;
    try {
      let clearKeys = {};
      if (currentChannel.key && currentChannel.key.includes(':')) {
        const [id, key] = currentChannel.key.split(':');
        clearKeys[id] = key;
      }
      if (Object.keys(clearKeys).length > 0 && currentChannel.drm === "clearkey") {
        player.configure({ drm: { clearKeys } });
      }
      await player.load(currentChannel.src);
      video.muted = false;
      await video.play().catch(() => {});
    } catch (e) {
      console.error("Retry failed:", e);
      setTimeout(retryLoad, 10000);
    }
  }

  function autoReload() {
    setInterval(() => {
      if (video.readyState < 2 || video.paused) retryLoad();
    }, 5000);
  }
  autoReload();

  // Populate live
  function populateLiveChannels(query = "") {
    if (!channelListElement) return;
    const q = query.trim().toLowerCase();
    channelListElement.innerHTML = "";
    const filtered = channelsWithLogos.filter(ch =>
      (ch.name?.toLowerCase() || "").includes(q) ||
      (ch.category?.toLowerCase() || "").includes(q)
    );
    if (filtered.length === 0) {
      if (noResults) noResults.classList.remove('hidden');
      return;
    } else {
      if (noResults) noResults.classList.add('hidden');
    }
    filtered.forEach((ch) => {
      const div = document.createElement('div');
      div.className = 'channel bg-gray-700 rounded-xl p-3 cursor-pointer text-center shadow-md hover:shadow-xl transition';
      div.innerHTML = `
        <img src="${ch.logo}" alt="${ch.name}" class="mb-2 mx-auto border-2 border-white shadow">
        <p class="text-sm font-semibold truncate">${ch.name}</p>
        <p class="text-[10px] text-slate-300 mt-1">${ch.category || 'Live'}</p>
      `;
      div.addEventListener('click', () => {
        document.querySelectorAll('#channelListLive .channel').forEach(c => c.classList.remove('active'));
        div.classList.add('active');
        zoomLevel = 1.0;
        video.style.transform = 'translate(-50%, -50%)';
        loadChannel(ch);
      });
      channelListElement.appendChild(div);
    });
  }

  // Populate movies
  function populateDownloadMovies() {
    const row = document.getElementById("downloadMovies");
    if (!row) return;
    row.innerHTML = "";
    downloadMovies.forEach((movie) => {
      const div = document.createElement('div');
      div.className = 'movie bg-gray-700 rounded-xl p-3 cursor-pointer text-center shadow-md hover:shadow-xl transition';
      div.innerHTML = `
        <img src="${movie.icon}" alt="${movie.name}" class="mb-2 mx-auto border-2 border-white shadow">
        <p class="text-sm font-semibold truncate">${movie.name}</p>
        <p class="text-[10px] text-slate-300 mt-1">${movie.tags.join(', ')}</p>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download</button>
      `;
      div.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();
        window.open(movie.download, '_blank');
      });
      row.appendChild(div);
    });
  }

  // Navigation buttons
  if (btnLive) {
    btnLive.addEventListener('click', () => {
      btnLive.classList.add('bg-blue-600', 'text-white');
      if (btnMovies) {
        btnMovies.classList.remove('bg-blue-600', 'text-white');
        btnMovies.classList.add('bg-gray-600');
      }
      document.getElementById('liveChannels')?.classList.remove('hidden');
      document.getElementById('downloadMovies')?.classList.add('hidden');
      populateLiveChannels(currentQuery);
    });
  }
  if (btnMovies) {
    btnMovies.addEventListener('click', () => {
      btnMovies.classList.add('bg-blue-600', 'text-white');
      if (btnLive) {
        btnLive.classList.remove('bg-blue-600', 'text-white');
        btnLive.classList.add('bg-gray-600');
      }
      document.getElementById('liveChannels')?.classList.add('hidden');
      document.getElementById('downloadMovies')?.classList.remove('hidden');
      populateDownloadMovies();
    });
  }

  // Search
  if (liveSearch) {
    liveSearch.addEventListener('input', (e) => {
      currentQuery = e.target.value;
      populateLiveChannels(currentQuery);
    });
  }

  // Init load
  populateLiveChannels();
}

document.addEventListener('DOMContentLoaded', init);