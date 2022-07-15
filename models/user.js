class User {
  constructor(
    id,
    hangoutIds,
    name,
    handle,
    hostHangoutIds,
    imageUrl,
    bio
  ) {
    this.id = id;
    this.categoryIds = hangoutIds;
    this.name = name;
    this.handle = handle;
    this.imageUrl = imageUrl;
    this.bio = bio;
    this.hostHangoutIds = hostHangoutIds;
  }
}

export default User;
