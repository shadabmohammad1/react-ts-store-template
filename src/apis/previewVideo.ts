export function getPreviewVideoListAPI() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        name: "BUNNY _080_0100",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
      {
        id: 2,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        name: "BUNNY _080_0200",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
      {
        id: 3,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        name: "BUNNY _080_0300",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
      {
        id: 4,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        name: "BUNNY _080_0400",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
      {
        id: 5,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        name: "BUNNY _080_0500",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
      {
        id: 6,
        video:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        name: "BUNNY _080_0600",
        project: "Animation",
        artist: "Shotgun Support",
        artistUrl: "",
      },
    ]);
  });
}
