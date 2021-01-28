import { allPlatforms } from "./platforms";
import { platformPage } from "./platform_page";

const selectPlatformHtml = async () => {
  try {
    const platforms = await allPlatforms();
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    let platformOptions = '';
    platforms.forEach(platform => {
      const { id, name } = platform;
      platformOptions += `
          <option value="${id}">${name}</option>
      `;
    });
  
    const finalHtml = `
          <div class="custom-select" style="width:200px;">
            <select name="platforms" id="platform-select">
              <option value="" disabled selected hidden>Platform</option>
              ${platformOptions}
            </select>
          </div>
    `;
    welcomeMessageElement.insertAdjacentHTML('afterend', finalHtml);  
    
    const select = document.getElementById('platform-select');
    select.addEventListener('change', () => { 
      const platform = platforms.filter((currentPlatform) => currentPlatform.id == select.value)[0];
      platformPage(platform);
    });
  } catch (error) {
    console.error(error);
  }
};

export { selectPlatformHtml };