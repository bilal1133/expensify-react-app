import React  from "react";
import {Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import moment from "moment";
const convertDate=(TS)=>{
    let unix_timestamp = TS;
    let dateTimeString = moment(TS).format("DD-MM-YYYY HH:mm:ss");
    console.log(dateTimeString)
    let temp =dateTimeString.toString();
    return{
        temp
    }
}

export default ({id, description,note,amount,createdAt})=>(
    <div>
        <div className="card">
            <div className="card-header">
                <Link to={`/edit/${id}`}>
                    <Chip
                        label={description}
                        color="primary"
                    />
                </Link>

            </div>
            <div className="card-body">
                <h5 className="card-title">Note</h5>
                <p className="card-text">{note}</p>
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                <p>
                    Amount {amount}-Date {createdAt}
                    {/*<time >{convertDate(createdAt)}</time>*/}

                </p>
            </div>
        </div>



    </div>
)

