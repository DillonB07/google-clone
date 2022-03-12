function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className="h-10 transform cursor-pointer rounded-full transition duration-150 hover:scale-110"
      src={url}
      alt="Profile picture"
    />
  )
}

export default Avatar
