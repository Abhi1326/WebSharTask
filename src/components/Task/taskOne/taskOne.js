/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'

import './taskOne.css'


class taskOne extends Component{

    constructor(props){
        super(props);
        this.state={
            outputtask:''
        };

        this.executeTaskOne = this.executeTaskOne.bind(this);
    }





    executeTaskOne(){

        let ports =3;
        let containers=[100,100,50];
        let currentPort=ports;
        let unAssignedContainersForPort=containers[currentPort-1];
        for (let height =1; height<=5; height++) {
            for(let column =1;column<=5; column++){
                for(let row=1;row<=10;row++){
                    if(currentPort===0)
                        return;
                    let containerPosition= currentPort +"-->" +("0" + row).slice(-2)
                        +"|"+("0" + column).slice(-2)+"|"+("0" + height).slice(-2);

                    console.log(containerPosition);

                    unAssignedContainersForPort--;
                    if(unAssignedContainersForPort===0) {
                        currentPort--;
                        if(currentPort>0)
                            unAssignedContainersForPort=containers[currentPort-1];
                    }
                }
            }
        }


    }
    render(){

        return(
            <div>

                <section className="team section_padding">
                    <h3 className="heading_h3">Task One</h3>
                    <p>I am a courier company. I have a ship which delivers container to "N" number of port in linear fashion. Ship can carry containers arranged in cuboid as shown in following image.<br />

                        Capacity of the ship is 10 containers in the row, 5 in the column , 5 in the hight.<br />
                        When I started business, I filled my ship randomly. Because of that at first port, I had to shuffle containers and deliver the container which was at the bottom. This wasted money, time, labour.<br />

                        So I would like these containers to be arranged at starting point only, so there will be any reshuffling.<br />

                        Input will be number of port and number of containers to be delivered at each port.<br />
                        Output will be for given a port number what would be the location of the all containers to be delivered at that port.<br />

                        In this problem, you can have static (hard coded) input so that you don't have to deal with console input.</p>

                    <div>
                        <h3>
                            Let ports =3<br />
                            let containers=[100,100,50]<br />
                        </h3>
                    </div>

                    <div className="task_container">
                        <button onClick={this.executeTaskOne} className="btn btn-default">Execute</button>
                    </div>

                    <div>
                        <p>Showed Up In console [Cntrl + Shift + I]<br />
                        In the Following Format (port)--> x|y|z (Position)</p>

                    </div>
                </section>
            </div>
        )
    }
}
export default taskOne

