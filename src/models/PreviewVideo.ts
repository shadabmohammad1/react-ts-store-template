export interface PreviewVideoInterface {
  id: number;
  video: string;
  name: string;
  project: string;
  artist: string;
  artistUrl: string;
}

export type PreviewVideoType = PreviewVideoInterface | undefined;
export type PreviewVideoListType = PreviewVideoInterface[];
