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

// Channel list (exactly 5 channels, unchanged)
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

// Download-only movies (unchanged)
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

// Initialize everything after DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
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

  // Remove all sizing customization to use native video size
  video.style.width = ''; // No forced width
  video.style.height = ''; // No forced height
  video.style.objectFit = ''; // No object-fit to preserve native size
  video.style.position = 'absolute';
  video.style.top = '50%';
  video.style.left = '50%';
  video.style.transform = 'translate(-50%, -50%)'; // Center the video
  videoContainer.style.position = 'relative';
  videoContainer.style.width = '100%';
  videoContainer.style.height = '100%';
  // Handle full screen changes to maintain native size
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      video.style.width = ''; // Use native width
      video.style.height = ''; // Use native height
      video.style.objectFit = ''; // No scaling
      video.style.position = 'fixed';
      video.style.top = '50%';
      video.style.left = '50%';
      video.style.transform = 'translate(-50%, -50%)';
      video.style.zIndex = '9999';
      videoContainer.style.width = '100vw';
      videoContainer.style.height = '100vh';
      videoContainer.style.position = 'fixed';
      videoContainer.style.top = '0';
      videoContainer.style.left = '0';
      videoContainer.style.zIndex = '9998';
      videoContainer.style.background = '#000'; // Black background for empty space
      // Adjust Shaka Player UI to avoid interference
      const shakaControls = document.querySelector('.shaka-video-container');
      if (shakaControls) {
        shakaControls.style.width = '100vw';
        shakaControls.style.height = '100vh';
        shakaControls.style.padding = '0';
        shakaControls.style.margin = '0';
        shakaControls.style.display = 'flex';
        shakaControls.style.justifyContent = 'center';
        shakaControls.style.alignItems = 'center';
      }
      const shakaControlBar = document.querySelector('.shaka-controls-container');
      if (shakaControlBar) {
        shakaControlBar.style.position = 'absolute';
        shakaControlBar.style.bottom = '0';
        shakaControlBar.style.width = '100%';
        shakaControlBar.style.padding = '0';
      }
    } else {
      video.style.width = '';
      video.style.height = '';
      video.style.objectFit = '';
      video.style.position = 'absolute';
      video.style.top = '50%';
      video.style.left = '50%';
      video.style.transform = 'translate(-50%, -50%)';
      video.style.zIndex = 'auto';
      videoContainer.style.width = '100%';
      videoContainer.style.height = '100%';
      videoContainer.style.position = 'relative';
      videoContainer.style.zIndex = 'auto';
      videoContainer.style.background = '';
      // Reset Shaka Player UI styles
      const shakaControls = document.querySelector('.shaka-video-container');
      if (shakaControls) {
        shakaControls.style.width = '';
        shakaControls.style.height = '';
        shakaControls.style.padding = '';
        shakaControls.style.margin = '';
        shakaControls.style.display = '';
        shakaControls.style.justifyContent = '';
        shakaControls.style.alignItems = '';
      }
      const shakaControlBar = document.querySelector('.shaka-controls-container');
      if (shakaControlBar) {
        shakaControlBar.style.position = '';
        shakaControlBar.style.bottom = '';
        shakaControlBar.style.width = '';
        shakaControlBar.style.padding = '';
      }
    }
  });

  // Check Picture-in-Picture support
  if (!document.pictureInPictureEnabled) {
    pipButton.style.display = 'none';
  }

  // Picture-in-Picture toggle
  pipButton.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(error => {
        console.error('Error exiting PiP mode: ', error);
      });
    } else {
      video.requestPictureInPicture().catch(error => {
        console.error('Error entering PiP mode: ', error);
      });
    }
  });

  // Initialize Shaka Player
  shaka.polyfill.installAll();
  if (!shaka.Player.isBrowserSupported()) {
    console.error('Browser not supported by Shaka Player.');
    alert('Your browser does not support Shaka Player.');
    return;
  }

  const player = new shaka.Player(video);
  const shakaUi = new shaka.ui.Overlay(player, videoContainer, video);
  shakaUi.configure({
    overflowMenuButtons: ['quality', 'language', 'captions', 'playback_rate', 'cast']
  });

  // Error handling for Shaka Player
  player.addEventListener('error', onError);

  async function loadChannel(channel) {
    currentChannel = channel;
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('active');

    try {
      await player.attach(video);
      let clearKeys = {};

      // Handle different key formats
      if (channel.key) {
        if (channel.key.includes(',')) {
          channel.key.split(',').forEach(pair => {
            const [keyId, key] = pair.split(':');
            clearKeys[keyId] = key;
          });
        } else {
          const [keyId, key] = channel.key.split(':');
          clearKeys[keyId] = key;
        }
      }

      if (Object.keys(clearKeys).length > 0 && channel.drm === "clearkey") {
        player.configure({ drm: { clearKeys } });
      } else {
        player.configure({ drm: {} });
      }

      await player.load(channel.src);
      video.muted = false;
      await video.play().catch(err => console.warn("Autoplay blocked:", err));
      console.log("Now playing:", channel.name);
    } catch (err) {
      console.error("Load error:", err);
      retryLoad();
    }
  }

  function onError(event) {
    console.error("Shaka Error:", event.detail);
    retryLoad();
  }

  async function retryLoad() {
    if (!currentChannel) return;
    try {
      console.log("Retrying channel:", currentChannel.name);
      let clearKeys = {};

      if (currentChannel.key) {
        if (currentChannel.key.includes(',')) {
          currentChannel.key.split(',').forEach(pair => {
            const [keyId, key] = pair.split(':');
            clearKeys[keyId] = key;
          });
        } else {
          const [keyId, key] = currentChannel.key.split(':');
          clearKeys[keyId] = key;
        }
      }

      if (Object.keys(clearKeys).length > 0 && currentChannel.drm === "clearkey") {
        player.configure({ drm: { clearKeys } });
      } else {
        player.configure({ drm: {} });
      }

      await player.load(currentChannel.src);
      video.muted = false;
      await video.play().catch(err => console.warn("Autoplay blocked:", err));
    } catch (e) {
      console.error("Retry failed:", e);
      setTimeout(retryLoad, 10000);
    }
  }

  function autoReload() {
    setInterval(() => {
      if (video.readyState < 2 || video.paused) {
        console.warn("Stream stuck, reloading...");
        retryLoad();
      }
    }, 5000);
  }

  // Start auto-reload
  autoReload();

  // Renders channels based on a query
  function populateLiveChannels(query = "") {
    const q = query.trim().toLowerCase();
    channelListElement.innerHTML = "";

    const filtered = channelsWithLogos.filter(ch => {
      const name = ch.name?.toLowerCase() || "";
      const cat = (ch.category || "").toLowerCase();
      return name.includes(q) || cat.includes(q);
    });

    if (filtered.length === 0) {
      noResults.classList.remove('hidden');
      return;
    } else {
      noResults.classList.add('hidden');
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
        loadChannel(ch);
      });
      channelListElement.appendChild(div);
    });
  }

  function populateDownloadMovies() {
    const row = document.getElementById("downloadMovies");
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

  // Navigation button handlers
  btnLive.addEventListener('click', () => {
    btnLive.classList.add('bg-blue-600', 'text-white');
    btnMovies.classList.remove('bg-blue-600', 'text-white');
    btnMovies.classList.add('bg-gray-600');
    document.getElementById('liveChannels').classList.remove('hidden');
    document.getElementById('downloadMovies').classList.add('hidden');
    populateLiveChannels(currentQuery);
  });

  btnMovies.addEventListener('click', () => {
    btnMovies.classList.add('bg-blue-600', 'text-white');
    btnLive.classList.remove('bg-blue-600', 'text-white');
    btnLive.classList.add('bg-gray-600');
    document.getElementById('liveChannels').classList.add('hidden');
    document.getElementById('downloadMovies').classList.remove('hidden');
    populateDownloadMovies();
  });

  // Search handler
  liveSearch.addEventListener('input', (e) => {
    currentQuery = e.target.value;
    populateLiveChannels(currentQuery);
  });

  // Initialize with live channels
  populateLiveChannels();
});