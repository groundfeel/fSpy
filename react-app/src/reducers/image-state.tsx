import { AppAction, ActionTypes } from "../actions";
import { ImageState } from "../types/image-state";
import { defaultImageState } from "../defaults/default-image-state";

export function imageState(state: ImageState, action: AppAction): ImageState {
  if (state === undefined) {
    return defaultImageState
  }

  switch (action.type) {
    case ActionTypes.SET_IMAGE_URL:
      return {
        ...state,
        url: action.url
      }
    case ActionTypes.SET_IMAGE_SIZE:
      return {
        ...state,
        width: action.width,
        height: action.height
      }
  }


  return state;
}