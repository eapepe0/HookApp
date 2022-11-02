import React , {useRef , useState} from 'react'

export const MediaPlayer = () => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        const video = videoRef.current;
        // si esta corriendo es falso , hacemos play
        // si esta corriendo es verdero pausamos
        isPlaying ? video.pause() : video.play();
        setIsPlaying(!isPlaying)
        // pasamos de falso a verdadero
        
    }
  return (
    <>
        <div className="centro-centro">
        <video width="720" ref={videoRef} onClick={handlePlay}>
            <source src="video.mp4" type='video/mp4'/>
        </video>
        <button className='btn btn-primary mt-2'onClick={handlePlay}>{isPlaying ? "Pause": "Play"}</button>
        {/* si estacorriendo es verdadero , mostramos pausa de lo contrario play */}
        </div>
    </>
  )
}
