const storyEl = document.querySelector("#story .story");

class StoryItem {
  constructor(user_name, user_profile) {
    this.name = user_name;
    this.profile = user_profile;
  }

  mountDOM() {
    const storyWrapper = document.createElement("div");
    storyWrapper.classList.add("story_item");
    const storyProfile = document.createElement("img");
    storyProfile.classList.add("picture");
    storyProfile.src = this.profile;
    storyProfile.alt = "user_profile";
    const storyUsername = document.createElement("span");
    storyUsername.classList.add("name");
    storyUsername.innerHTML = this.name;
    storyWrapper.appendChild(storyProfile);
    storyWrapper.appendChild(storyUsername);
    storyEl.appendChild(storyWrapper);
  }
}

module.exports = StoryItem;
