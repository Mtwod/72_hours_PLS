import { allPlatforms } from "./platforms";

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
    select.addEventListener('change', () => { console.log(`And the value is... ${select.value}!!`)});
  } catch (error) {
    console.error(error);
  }
};

export { selectPlatformHtml };