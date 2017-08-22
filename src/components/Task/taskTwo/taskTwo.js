/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
// import axios from 'axios';

import './taskTwo.css'
import './fileupload'

class taskTwo extends Component{


    constructor(props){
        super(props);
        this.executeTaskRevised = this.executeTaskRevised.bind(this);
    }


    executeTaskRevised(){

        var n = 4;  //number of ports
        var containers = [10,8,20,40];
        var sum = containers.reduce((a, b) => a + b, 0);
        if(sum>250){
            console.log("sorry no space in ship for "+ sum + " containers.")
        }else{
            var row = 1, column = 1, height = 1;
            var i = 0;
            for (i = n ; i > 0; i--) {
                var c = containers[i-1];
                console.log("for port ", i, ": ");
                console.log("from : pos -", row, ", ", column, ", ", height);

                height += parseInt(c / (10*5));
                c = c % (10*5);
                column += parseInt((c / 10));
                c = c % (10);
                row += parseInt(c);


                if(row>1){
                    row-=1;
                }else{
                    if(column>1){
                        column-=1;
                        row = 10
                    }else{
                        if(height>1){
                            height-=1;
                            row = 10;
                            column = 5;
                        }
                    }
                }

                adjust();

                console.log("to : pos -", row, ", ", column, ", ", height);

                row += 1;

                adjust()
            }
        }

        function adjust() {
            if (row > 10) {
                column += parseInt(row / 10);
                row = parseInt(row % 10);
            }

            if (column > 5) {
                height += parseInt(column / 5);
                column = parseInt(column % 5);
            }

        }

    }




    render(){
        return(
            <div>
                <section className="contactus section_padding" style={{display:'table',paddingTop:'47px'}}>
                    <h3 className="heading_h3">Task Two</h3>

                    <p>I am a courier company. I have a ship which delivers container to "N" number of port in linear fashion. Ship can carry containers arranged in cuboid as shown in following image.<br />

                        Capacity of the ship is 10 containers in the row, 5 in the column , 5 in the hight.<br />
                        When I started business, I filled my ship randomly. Because of that at first port, I had to shuffle containers and deliver the container which was at the bottom. This wasted money, time, labour.<br />

                        So I would like these containers to be arranged at starting point only, so there will be any reshuffling.<br />

                        Input will be number of port and number of containers to be delivered at each port.<br />
                        Output will be for given a port number what would be the location of the all containers to be delivered at that port.<br />

                        In this problem, you can have static (hard coded) input so that you don't have to deal with console input.</p>

                    <div>
                        <h3>
                            Let ports = 4;  //number of ports<br />
                            Let containers = [10,8,20,40]<br />
                        </h3>
                    </div>

                    <div className="task_container">
                        <button onClick={this.executeTaskRevised} className="btn btn-default">Execute</button>
                    </div>

                    <div>
                        <p>Showed Up In console [Cntrl + Shift + I]<br />
                            for port(port no.) :
                            from : pos - x ,  y ,  z</p>

                    </div>
                </section>
            </div>

        )
    }
}
export default  taskTwo
