import React, { Component } from 'react'
import Toggle from './Toggle'
import SliderCard from './SliderCard'
import SelectCard from './SelectCard'
import './Dashboard.css'

class Dashboard extends Component {
    state = {
        online: false,
        quality: '',
        volumeTooLoud: false

    }

    toggleOnline = () => {
        this.setState({online:!this.state.online})
    }
    checkVolumeLow = () => {
        this.setState({volumeTooLoud: false})
    }
    checkVolumeHigh = () => {
        this.setState({volumeTooLoud: true})
    }
    soundQualityLow = () => {
        this.setState({quality: '10'})
    }
    soundQualityMedium = () => {
        this.setState({quality: '20'})
    }
    soundQualityHigh = () => {
        this.setState({quality: '30'})
    }
    render(){

        let qualityNotification;
        if(this.state.quality== '10'){
           qualityNotification= 'Music quality is degraded. Increase quality if your connection allows it.'
        }else{
            qualityNotification= null
        }
        return (
            <div>
                <h1>Welcome to My Music App</h1>
                <h2>
                   {
                       this.state.online ? "You are online" : "Your application is offline. You won't be able to share or stream music to other devices."
                   }
               </h2>
               <h2>
                   {
                      qualityNotification
                   }
               </h2>
               <h2>
                   {
                   this.state.volumeTooLoud ? 'Listening to music at a high volume could cause long-term hearing loss. if volume goes above 80.': null
                   }
                 </h2>
                <div className= 'dashboard-container'>
                <div className='box-1'><p><Toggle toggleOnline={this.toggleOnline} /></p></div>
                <div className='box-2'><p><SliderCard 
                                         checkVolumeLow={this.checkVolumeLow}
                                         checkVolumeHigh={this.checkVolumeHigh}
                                     /></p>
                </div>
                <div className='box-3'><p><SelectCard 
                                            soundQualityLow={this.soundQualityLow} 
                                            soundQualityMedium={this.soundQualityMedium}
                                            soundQualityHigh={this.soundQualityHigh}/>
                                    </p>
                                    
                </div>
               </div>
               
            </div>
        )
    }
}

export default Dashboard