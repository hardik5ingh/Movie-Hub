import './Card.css'
export default function Card({movie}) {

    return (
            <div className="card m-5 p-0 " style={{width: "22rem"}}>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "Poster not available"} className="card-img-top h-100" alt="Poster Not Available"  />
                <div className="card-body">
                    <h4 className="card-text m-0 fs-3">{movie.Title}</h4>
                    <p className="card-text m-0 fs-5 "><b>Year: </b>{movie.Year}</p>
                    <p className="card-text m-0 text-uppercase fs-5"><b> Type:</b> {movie.Type}</p>
                </div>
            </div>
    )

}