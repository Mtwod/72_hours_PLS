const platformsImages = (game) => {
  const { platforms } = game;
  let platformsList = [];
  let platformsImages = '';
  const platformsAvailable = [
    'pc',
    'xbox',
    'playstation',
    'switch',
    'ios',
    'android',
    'linux'
  ];

  const addAvailablePlatform = (platformSlug) => {
    platformsAvailable.forEach((platformAvailable) => {
      if (platformSlug.includes(platformAvailable)) {
        platformsList.push(platformAvailable);
        return;
      }
    });
  };

  platforms.forEach((element) => addAvailablePlatform(element.platform.slug));

  platformsList = platformsList.map((platform) => {
    if (platform === 'ios' || platform === 'android') return platform = "mobile";
    return platform;
  });
  platformsList = platformsList.reduce((finalList, platform) => {
    if (finalList.includes(platform)) return finalList;
    finalList.push(platform);
    return finalList;
  }, []);

  platformsList.forEach(platform => {
    platformsImages += `
              <img class="platformIcon" src="./src/images/${(platform === 'ios' || platform === 'android') ? "mobile" : platform}.svg" alt="platform img">
    `;
  });
  return platformsImages;
};

export { platformsImages };
