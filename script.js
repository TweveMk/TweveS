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
    name: "AXN",
    src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd",
    key: "fd5d928f5d974ca4983f6e9295dfe410:3aaa001ddc142fedbb9d5557be43792f",
    drm: "clearkey",
    category: "Movies"
  },
  {
    name: "ASTRO PL 1",
    src: "https://get.perfecttv.net/jwt.mpd?username=vip_3klp0es8&password=wg3piwEs&channel=epl1hd",
    key: "1090bef3275b45d188200b828fe30527:43eff6a8da896a34056f339ec9562045",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "ASTRO PL 2",
    src: "https://get.perfecttv.net/jwt.mpd?username=$username&password=$password&channel=epl2hd",
    key: "4ecad9adae8f44f0b1c8bf5c492da613:43ac85382893194802f0d34dbf71059e",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "PREMIER LEAGUE TV",
    src: "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd",
    key: "002046c9a49b9ab1cdb6616bec5d26c3:d2f92f6b7edc9a1a05d393ba0c20ef9e",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "AZAM SPORTS 1",
    src: "https://1375207669.rsc.cdn77.org/1375207669/index.mpd",
    key: "675c9741780f4b75b74d4bf08536084b:5bec79012cd8e84f3cfe6bee4992b4b7",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "AZAM SPORTS 2",
    src: "https://1921800925.rsc.cdn77.org/1921800925/index.mpd",
    key: "5316e9bf6cce4ea4942a676eee52d8ce:ccc4258e5c7b485a2b148f37cbdfdc6a",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "AZAM SPORTS 3",
    src: "https://1272419850.rsc.cdn77.org/1272419850/index.mpd",
    key: "c764c3a21d054b3086a09698bb1aacbd:3444a68d6f5568cfbd42b33fec54aecf",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "AZAM SPORTS 4",
    src: "https://1449337437.rsc.cdn77.org/1449337437/index.mpd",
    key: "d33d758208f84c10af75d39e3c3adf6a:2145d798aed80ad44d0ad198f38d0f9b",
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
    name: "AZAM TWO",
    src: "https://1030517708.rsc.cdn77.org/1030517708/index.mpd",
    key: "ee8085ef939b4434aa6c5f0d7e7b8863:c48a7a886dfdcbbc7d9bf71d13bb976e",
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
    name: "ZAMARADI TV",
    src: "https://1492963165.rsc.cdn77.org/1492963165/index.mpd",
    key: "cb25785c18c54d649be2dae85ff03194:eb73acdad92ca409ba7ae364788ef16e",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "UTV",
    src: "https://1730904702.rsc.cdn77.org/1730904702/index.mpd",
    key: "1caf60bdaa7e4c90908f0cd72b309fae:4bc9e94d6b3df69d995d9e9e5be86bdc",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "CROWN TV",
    src: "https://1980121900.rsc.cdn77.org/1980121900/index.mpd",
    key: "d861e2b92c744fbba861fb8b1906cf74:977897864cf6d102c85816edb8e403a8",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "ZBC 2",
    src: "https://1833615464.rsc.cdn77.org/1833615464/index.mpd",
    key: "50d91516e3814946b2c00200ad0ab0bc:ba3175efd331adc59a11baa21a8ad9e6",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "SKY LIVE EVENT 01",
    src: "https://live1-ott.izzigo.tv/1/out/u/dash/SKY-LIVE-EVENT-1-HD/default.mpd",
    key: "a3636a51227fa338cdddf5892d8a621c:1444ee3c4d08bf39454b914f797968eb",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "SKY LIVE EVENT 04",
    src: "https://live1-ott.izzigo.tv/1/out/u/dash/SKY-LIVE-EVENT-4-HD/default.mpd",
    key: "a931b2e953695ffb0cfd38573e97ba33:4ddd99cc4fb168d7f0e20be8a3287100",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "SKY LIVE EVENT 06",
    src: "https://live1-ott.izzigo.tv/1/out/u/dash/SKY-LIVE-EVENT-6-HD/default.mpd",
    key: "ec7229067cde06e0bedaa0d71ec0c974:da03b65d333e74aaae446211a83c7595",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TRACE MZIKI",
    src: "https://1838417631.rsc.cdn77.org/1838417631/index.mpd",
    key: "8568ccd1d08443d19951abd78d648c5b:0592864ecf5bab473a63731420511d42",
    drm: "clearkey",
    category: "Entertainment"
  },
  {
    name: "STUDIO UNIVERSAL",
    src: "https://cdn08jtedge.indihometv.com/dassdvr/130/studiouniversal/manifest.mpd",
    key: "646973636f3030303030303030303030:0b0c2a86713e0546df8ab4403927059d",
    drm: "clearkey",
    category: "Movies"
  },
  {
    name: "STARZ PLAY ACTION",
    src: "https://neacdnpop3-edge02.aws.playco.com/live/eds/StarzPlay_Action/DASH/StarzPlay_Action.mpd",
    key: "295981eefbf1bf38fe361ee6c969dacf:c16c1c18d96a2932e6fff8f685cbf8d8",
    drm: "clearkey",
    category: "Movies"
  },
  {
    name: "DAZN RISE",
    src: "https://ac-003.live.p7s1video.net/4a37da02/t_003/dazn-rise-hd/cenc-default.mpd",
    key: "75508caa27239cd34ca45ee862f1bbf2:d38f9f2b690bad3fcc838013242cc5e4",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "UNIFI SPORTS",
    src: "https://unifi-live01.secureswiftcontent.com/UnifiHD/live11.mpd",
    key: "",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "BEIN SPORTS 1",
    src: "https://a122aivottlinear-a.akamaihd.net/OTTB/syd-nitro/live/clients/dash/enc/pwdvd9fm5u/out/v1/5e22845dab3648b8a7033fd5923d62d1/cenc.mpd",
    key: "f959dcdd1ca8c89658cd651ed36e2851:aa4cf56ce7c522a9e6582c42537be381",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "BEIN SPORTS 3",
    src: "https://api-proxad.dc2.oqee.net/playlist/v1/live/971/1/live.mpd",
    key: "441100b7de65d7c582a9c71140e46f79:ef37dadc14bdade17224ef4bc9f87ce6,92e8cc9527c7f56a10777278cb801027:4ce3f3e2234f00b21ba77006f197832a",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TRAVEL CHANNEL",
    src: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd",
    key: "f3047fc13d454dacb6db4207ee79d3d3:bdbd38748f51fc26932e96c9a2020839",
    drm: "clearkey",
    category: "Lifestyle"
  },
  {
    name: "DAZN SPORTS 1",
    src: "https://live03p-seg.msf.cdn.mediaset.net/live/ch-i1/i1-dash-widevine.isml/manifest.mpd",
    key: "00f9f3c0783536b8ee91704e23b78016:bfd04d6f544c9cc4d35cb13ab6778587",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 1",
    src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
    key: "ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 2",
    src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    key: "6d1708b185c6c4d7b37600520c7cc93c:1aace05f58d8edef9697fd52cb09f441",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 3",
    src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
    key: "4e993aa8c1f295f8b94e8e9e6f6d0bfe:86a1ed6e96caab8eb1009fe530d2cf4f",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 4",
    src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
    key: "e31a5a81caff5d07ea2411a571fc2e59:96c5ef69479732ae734f962748c19729",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 5",
    src: "https://otte.live.fly.ww.aiv-cdn.net/SIN/live/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd",
    key: "60c0d9b41475e01db4ffb91ed557fbcc:36ee40e58948ca15e3caba8d47b8f34b",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 1 BACKUP",
    src: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
    key: "ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 2 BACKUP",
    src: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
    key: "6d1708b185c6c4d7b37600520c7cc93c:1aace05f58d8edef9697fd52cb09f441",
    drm: "clearkey",
    category: "Sports"
  },
  {
    name: "TNT SPORTS 3 BACKUP",
    src: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
    key: "4e993aa8c1f295f8b94e8e9e6f6d0bfe:86a1ed6e96caab8eb1009fe530d2cf4f",
    drm: "clearkey",
    category: "Sports"
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
  }
];

// Online movies
const onlineMovies = [
  {
    name: "Deep cover",
    icon: "https://i.ibb.co/TMdkCYhb/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/6ae044c0-692f-40bd-95c5-0c99ab30f27a/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "SuperMan (Imetafsiriwa)",
    icon: "https://i.ibb.co/zhZY2mC0/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/90a38928-5c11-4526-ba09-02a02b5dbc85/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "Off the Grind",
    icon: "https://i.ibb.co/KpYny5HT/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/bb20ea3c-7f75-499c-9e92-eb0ac3ae1a2d/playlist.m3u8",
    tags: ["HD", "Drama"]
  },
  {
    name: "THUNDERBOLTS",
    icon: "https://i.ibb.co/mCYRvz1Q/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8",
    tags: ["HD", "Action"]
  },
  {
    name: "Heard of State",
    icon: "https://i.ibb.co/xKY7mg0m/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8",
    tags: ["HD", "Drama"]
  },
  {
    name: "SHADOW FORCE",
    icon: "https://i.ibb.co/ZpJtxPVm/x.jpg",
    src: "https://vz-1bb50f2e-8ea.b-cdn.net/bde45d25-32bb-44cc-b00b-945ea7423c7d/playlist.m3u8",
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
  const videoElement = document.getElementById('video');
  const pipButton = document.getElementById('pipButton');
  const videoContainer = document.getElementById('videoContainer');
  const channelListElement = document.getElementById('channelListLive');
  const btnLive = document.getElementById('btnLive');
  const btnMovies = document.getElementById('btnMovies');

  // Search elements
  const liveSearch = document.getElementById('liveSearch');
  const noResults = document.getElementById('noResults');
  let currentQuery = "";
  let shakaPlayer = null;
  let exoPlayer = null;

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
      videoElement.requestPictureInPicture().catch(error => {
        console.error('Error entering PiP mode: ', error);
      });
    }
  });

  // Initialize Shaka Player for channels
  shaka.polyfill.installAll();
  if (!shaka.Player.isBrowserSupported()) {
    console.error('Browser not supported by Shaka Player.');
    alert('Your browser does not support Shaka Player.');
    return;
  }

  async function initShakaPlayer() {
    if (shakaPlayer) {
      await shakaPlayer.destroy();
    }
    shakaPlayer = new shaka.Player(videoElement);
    const shakaUi = new shaka.ui.Overlay(shakaPlayer, videoContainer, videoElement);
    shakaUi.configure({
      overflowMenuButtons: ['quality', 'language', 'captions', 'playback_rate', 'cast']
    });
  }

  function initExoPlayer() {
    if (exoPlayer) {
      exoPlayer.destroy();
    }
    exoPlayer = new exo.Player(videoElement);
    exoPlayer.addEventListener('error', (error) => {
      console.error('ExoPlayer error:', error);
      alert(`Error loading movie: ${error.message}`);
    });
    videoElement.controls = true; // Enable native controls for ExoPlayer
  }

  async function loadChannel(media) {
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('active');

    try {
      await initShakaPlayer();
      const clearKeys = {};
      if (media.key) {
        if (media.key.includes(',')) {
          media.key.split(',').forEach(keyPair => {
            const [keyId, key] = keyPair.split(':');
            clearKeys[keyId] = key;
          });
        } else {
          const [keyId, key] = media.key.split(':');
          clearKeys[keyId] = key;
        }
      }

      shakaPlayer.configure({
        drm: {
          clearKeys: clearKeys
        }
      });

      await shakaPlayer.load(media.src);
      videoElement.play().catch(error => console.warn("Autoplay failed (channel): User interaction needed", error));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error loading channel:", error);
      alert(`Error loading media: ${media.name}`);
    }
  }

  function loadMovie(media) {
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('active');

    try {
      initExoPlayer();
      exoPlayer.source = {
        sources: [
          {
            src: media.src,
            type: 'application/x-mpegURL' // HLS format for .m3u8
          }
        ]
      };
      videoElement.play().catch(error => console.warn("Autoplay failed (movie): User interaction needed", error));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error loading movie:", error);
      alert(`Error loading movie: ${media.name}`);
    }
  }

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
    const row = document.getElementById("downloadMoviesRow");
    row.innerHTML = "";
    downloadMovies.forEach(m => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${m.icon}" alt="${m.name} poster">
        <div class="movie-info">
          ${m.tags && m.tags.length ? m.tags.map(t => `<span class='badge'>${t}</span>`).join('') : ""}
          <h3 class="mt-2 font-semibold text-sm">${m.name}</h3>
          <div class="mt-3 flex gap-2">
            <a href="${m.download}" target="_blank" rel="noopener" class="flex-1 text-center bg-cyan-400 text-black font-semibold py-2 rounded-xl hover:bg-cyan-300 transition" download>
              ⬇️ Download
            </a>
          </div>
        </div>
      `;
      row.appendChild(card);
    });
  }

  function populateOnlineMovies() {
    const row = document.getElementById("onlineMoviesRow");
    row.innerHTML = "";
    onlineMovies.forEach(m => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="${m.icon}" alt="${m.name} poster">
        <div class="movie-info">
          ${m.tags && m.tags.length ? m.tags.map(t => `<span class='badge'>${t}</span>`).join('') : ""}
          <h3 class="mt-2 font-semibold text-sm">${m.name}</h3>
          <div class="mt-3 flex gap-2">
            <button class="flex-1 text-center bg-green-500 text-white font-semibold py-2 rounded-xl hover:bg-green-400 transition">
              ▶️ Play Now
            </button>
          </div>
        </div>
      `;
      card.querySelector('button').addEventListener('click', () => {
        loadMovie(m);
      });
      row.appendChild(card);
    });
  }

  // Navigation
  function showPage(page) {
    const live = document.getElementById("livePage");
    const moviesPage = document.getElementById("moviesPage");
    const playerBox = document.getElementById("videoContainer");

    // Hide all pages and player
    live.classList.add("hidden");
    moviesPage.classList.add("hidden");
    playerBox.classList.add("hidden");

    // Unset nav state
    btnLive.classList.remove("active");
    btnMovies.classList.remove("active");

    // Show selected page and set active button
    if (page === "live") {
      live.classList.remove("hidden");
      btnLive.classList.add("active");
    } else if (page === "movies") {
      moviesPage.classList.remove("hidden");
      btnMovies.classList.add("active");
    }
  }

  // Live search listener (with tiny debounce)
  let searchTimer;
  liveSearch.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    currentQuery = e.target.value || "";
    searchTimer = setTimeout(() => populateLiveChannels(currentQuery), 100);
  });

  // Add event listeners for navigation
  btnLive.addEventListener('click', () => showPage('live'));
  btnMovies.addEventListener('click', () => showPage('movies'));

  // Initialize
  populateLiveChannels();
  populateDownloadMovies();
  populateOnlineMovies();
  showPage('live'); // Set Live TV as default page
});