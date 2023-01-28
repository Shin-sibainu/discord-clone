export interface InitialState {
  displayName: string;
  photo: string | undefined;
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
