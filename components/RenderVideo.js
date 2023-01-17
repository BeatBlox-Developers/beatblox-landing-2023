export const RenderVideo = (props) => {
    const vidSrc = '/videos/' + props.video + '.mp4';
    const vidClass = 'video-'+ props.video;
    return (
      <video
        className={vidClass}
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src={vidSrc}
        type="video/mp4"/>
    );
  }