export interface InitialState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export interface InitialAppState {
  channelId: string | null;
  channelName: string | null;
}
