import React, { Component } from 'react';
import Camera from 'react-camera';
import { Link } from 'react-router-dom';
import {image} from '../actions/image';
import {connect} from 'react-redux';

class Cam extends Component {

    constructor(props) {
        super(props);
        this.takePicture = this.takePicture.bind(this);
        this.state = {
            blob: ''
        }

    }

    takePicture() {
        this.camera.capture()
            .then(blob => {
                let blobUrl = URL.createObjectURL(blob);
                console.log('blobUrl', blobUrl)
                this.props.dispatch(image(blobUrl));
                //this.img.onload = () => { URL.revokeObjectURL(this.src); }     move to Writing prop
                //setstate to toggle class add display:none
            })
    }

    render() {

        return (
            <div>
                <div style={style.container} >
                    <Camera
                        style={style.preview}
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                    >
                    <Link to={{ pathname: process.env.PUBLIC_URL + '/writing' } } onClick={this.takePicture} >
                        <div style={style.captureContainer} > {/*727px and less need to add bottom margin eg 100px*/} 
                            <div style={style.captureButton} />
                        </div>
                </Link>
                    </Camera>
                </div>
            </div>
        );
    }
}

const style = {
    preview: {
        position: 'relative',
        margin: '0 auto',
        height: '100vh',
        textAlign: 'center',
        overflow: 'hidden',
        maxWidth: '178vh'
    },
    captureContainer: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 1,
        bottom: 0,
        width: '100%'
    },
    captureButton: {
        backgroundColor: '#ff80ab',
        borderRadius: '50%',
        height: 52,
        width: 52,
        color: '#000',
        margin: 20
    },
    captureImage: {
        width: '100%',
    }
};

export default connect(state => state)(Cam);