import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPreviewVideoListAPI } from "apis/previewVideo";
import type { RootState } from "app/store";
import { PreviewVideoListType } from "models/PreviewVideo";

export interface PreviewVideoState {
  videoList: PreviewVideoListType;
  selectedVideoList: PreviewVideoListType;
  playingVideoIndex: number;
  apiStatus: "idle" | "loading" | "failed";
  sidebarOpen: boolean;
}

const initialState: PreviewVideoState = {
  videoList: [],
  selectedVideoList: [],
  playingVideoIndex: 0,
  apiStatus: "idle",
  sidebarOpen: false,
};

export const videoListAsync = createAsyncThunk(
  "previewVideo/fetchCount",
  async () => {
    const response = await getPreviewVideoListAPI();
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const previewVideoSlice = createSlice({
  name: "previewVideo",
  initialState,
  reducers: {
    setNextVideo: state => {
      state.playingVideoIndex =
        (state.playingVideoIndex + 1) % state.selectedVideoList.length;
    },
    setPreviousVideo: state => {
      state.playingVideoIndex =
        (state.selectedVideoList.length + state.playingVideoIndex - 1) %
        state.selectedVideoList.length;
    },
    setSelectedVideos: (state, action) => {
      state.selectedVideoList = state.videoList.filter(video =>
        action.payload.includes(video.id),
      );
    },
    openSidebar: state => {
      state.sidebarOpen = true;
    },
    closeSidebar: state => {
      state.sidebarOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(videoListAsync.pending, state => {
        state.apiStatus = "loading";
      })
      .addCase(videoListAsync.fulfilled, (state, action) => {
        state.apiStatus = "idle";
        state.videoList = action.payload as PreviewVideoListType;
        state.selectedVideoList = action.payload as PreviewVideoListType;
      })
      .addCase(videoListAsync.rejected, state => {
        state.apiStatus = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  setNextVideo,
  setPreviousVideo,
  setSelectedVideos,
  openSidebar,
  closeSidebar,
} = previewVideoSlice.actions;

// Getters
export const playingVideo = (state: RootState) =>
  state.previewVideo.selectedVideoList[state.previewVideo.playingVideoIndex] ||
  {};

export const allVideosList = (state: RootState) => state.previewVideo.videoList;

export const previewVideoList = (state: RootState) =>
  state.previewVideo.selectedVideoList;

export const currentIndex = (state: RootState) =>
  state.previewVideo.playingVideoIndex;

export const videoCount = (state: RootState) =>
  state.previewVideo.selectedVideoList.length;

export const sidebarOpen = (state: RootState) => state.previewVideo.sidebarOpen;

export default previewVideoSlice.reducer;
