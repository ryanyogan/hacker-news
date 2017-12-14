import {
  Component,
  Prop,
  PropDidChange,
  PropWillChange,
  State
} from "@stencil/core";
import { LoadingController } from "@ionic/core";

@Component({
  tag: "list-container",
  styleUrl: "list-container.scss"
})
export class NewsPage {
  @Prop() pageNum: number;
  @Prop() type: string;
  @Prop({ connect: "ion-loading-controller" })
  loadingCtrl: LoadingController;

  @State() stories: any[];

  apiRootUrl: string = "https://node-hnapi.herokuapp.com";

  componentWillLoad() {
    fetch(`${this.apiRootUrl}/${this.type}?page=${this.pageNum}`)
      .then(res => res.json())
      .then(data => {
        this.stories = data;
      })
      .catch(err => {
        console.error("Could not load data", err);
      });
  }

  @PropWillChange("pageNum")
  something() {}

  @PropDidChange("pageNum")
  fetchNew() {
    fetch(`${this.apiRootUrl}/${this.type}?page=${this.pageNum}`)
      .then(res => res.json())
      .then(data => {
        if (data.length !== 0) {
          this.stories = data;
        }
      })
      .catch(err => {
        console.error("Could not load data", err);
      });
  }

  render() {
    return [<story-list stories={this.stories} />];
  }
}
