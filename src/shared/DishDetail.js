import React,{Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this);
        }
        renderComments(){
            const dishComAuth= this.props.dish.comments.map((x)=>{
               return(
                 <ul className="list-unstyled">
                     <li>
                         {x.comment}
                     </li>
                     <br/>
                     <li>
                         --{x.author}
                     </li>
                 </ul>

               );
            });
            return dishComAuth;
        }
        render(){
            if (this.props.dish != null)
                return(
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>
                                Comments
                            </h4>
                              {this.renderComments()}
                        </div>
                    </div>
                )
            else
                return(
                    <div></div>
                )
        }
}
export default DishDetail;