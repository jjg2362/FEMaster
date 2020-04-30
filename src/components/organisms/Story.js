"use strict";
import Component from "../../lib/Component";
import StoryItem from "../molecules/Story/StoryItem";
import { storyData } from "../assets/Assets";

class Story extends Component {
  constructor() {
    super();
    this.storyItems = [];
    storyData.map((data) => {
      this.storyItems.push(new StoryItem({ name: data.name, src: data.src }));
    });
  }

  onMount(event) {}

  render() {
    return `
        <section id="story" class="flex-container flex-center-sort">
            <div class="main-story flex-container flex-row">
                ${this.storyItems.map((story) => story.render())}
            </div>
        </section>
    `;
  }
}

export default Story;
