export interface InitialState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

// export interface User {
//   user:
//     | undefined
//     | {
//         uid: string;
//         photo: string;
//         email: string;
//         displayName: string;
//       };
// }
