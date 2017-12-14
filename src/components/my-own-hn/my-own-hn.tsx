import { Component } from "@stencil/core";

@Component({
  tag: "my-own-hn",
  styleUrl: "my-own-hn.scss"
})
export class MyOwnHn {
  render() {
    return (
      <ion-app>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-icon id="ionic-icon" name="ionic" />
            </ion-buttons>

            <div class="tabs-bar">
              <stencil-route-link
                url="/news/1"
                urlMatch={["/", "/news/:pageNum", "/news/:pageNum/"]}
                activeClass="active"
                exact={true}
              >
                <ion-button
                  class={{
                    "header-button": true,
                    "first-button": true
                  }}
                  clear
                >
                  News
                </ion-button>
              </stencil-route-link>
            </div>
          </ion-toolbar>
        </ion-header>

        <stencil-router id="router">
          <stencil-route
            url={["/", "/news/:pageNum", "/news/:pageNum/"]}
            component="news-page"
          />
        </stencil-router>
      </ion-app>
    );
  }
}
