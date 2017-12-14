import { Component, Prop } from "@stencil/core";

@Component({
  tag: "story-list",
  styleUrl: "story-list.scss"
})
export class StoryList {
  @Prop() stories: any;

  preloadData: any[] = [
    {
      id: 1573131,
      title: "This could be fun",
      points: 180,
      user: "Ryan",
      time: 1511875266,
      time_ago: "5 hours ago",
      comment_count: 50,
      type: "link",
      url: "https://github.com/tenta-browser/tenta-dns",
      domain: "github.com"
    }
  ];

  render() {
    const data = this.stories || this.preloadData;

    const stories = data.map(story => (
      <ion-item>
        <div class="points" slot="start">
          {story.points || 0}
        </div>
        <ion-label>
          <h2 class="list-header">
            <a href={story.url}>{story.title}</a>
          </h2>
          <stencil-route-link url={`/comments/${story.id}`}>
            <button class="comments-text" role="button">
              Posted by {story.user} {story.time_ago} | {story.comments_count}{" "}
              comments
            </button>
          </stencil-route-link>
        </ion-label>
      </ion-item>
    ));

    return <ion-list>{stories}</ion-list>;
  }
}
