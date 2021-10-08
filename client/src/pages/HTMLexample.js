// export default function HTMLexample() {
//   return (
//     <body>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand text-center" href="./home.html">
//             Concert Carpool
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-end"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Under the Hood
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       About
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="./events.html">
//                       Events
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//             <button
//               type="button"
//               className="btn btn-dark"
//               data-bs-toggle="modal"
//               data-bs-target="#loginModal"
//             >
//               Login/Register
//             </button>
//           </div>
//         </div>
//       </nav>
//       <br />
//       <div className="container-fluid page-content w-75 d-flex">
//         <div className="card event-card p-3 flex-fill">
//           <img src="..." className="card-img-top event-image" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title event-title">Event title</h5>
//             <p className="card-text event-description">
//               This is the description of the event Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Reprehenderit animi iste eos sed ea
//               debitis magni, suscipit eius ex adipisci?
//             </p>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item event-location">Event Location</li>
//           </ul>
//           <div className="card-body">
//             <a href="#" className="card-link">
//               I need a ride
//             </a>
//             <a href="#" className="card-link">
//               I can drive
//             </a>
//           </div>
//         </div>
//         <div className="card event-card p-3 flex-fill">
//           <img src="..." className="card-img-top event-image" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title event-title">Event title</h5>
//             <p className="card-text event-description">
//               This is the description of the event Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Reprehenderit animi iste eos sed ea
//               debitis magni, suscipit eius ex adipisci?
//             </p>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item event-location">Event Location</li>
//           </ul>
//           <div className="card-body">
//             <a href="#" className="card-link">
//               I need a ride
//             </a>
//             <a href="#" className="card-link">
//               I can drive
//             </a>
//           </div>
//         </div>
//         <div className="card event-card p-3 flex-fill">
//           <img src="..." className="card-img-top event-image" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title event-title">Event title</h5>
//             <p className="card-text event-description">
//               This is the description of the event Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Reprehenderit animi iste eos sed ea
//               debitis magni, suscipit eius ex adipisci?
//             </p>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item event-location">Event Location</li>
//           </ul>
//           <div className="card-body">
//             <a href="#" className="card-link">
//               I need a ride
//             </a>
//             <a href="#" className="card-link">
//               I can drive
//             </a>
//           </div>
//         </div>
//         <div className="card event-card p-3 flex-fill">
//           <img src="..." className="card-img-top event-image" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title event-title">Event title</h5>
//             <p className="card-text event-description">
//               This is the description of the event Lorem ipsum dolor sit amet
//               consectetur adipisicing elit. Reprehenderit animi iste eos sed ea
//               debitis magni, suscipit eius ex adipisci?
//             </p>
//           </div>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item event-location">Event Location</li>
//           </ul>
//           <div className="card-body">
//             <a href="#" className="card-link">
//               I need a ride
//             </a>
//             <a href="#" className="card-link">
//               I can drive
//             </a>
//           </div>
//         </div>
//       </div>
//       <br />
//       <div
//         className="modal fade"
//         id="loginModal"
//         aria-hidden="true"
//         aria-labelledby="loginModalToggleLabel"
//         tabindex="-1"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="loginModalToggleLabel">
//                 Login Pool
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form className="row g-3">
//                 <div className="col-md-4">
//                   <label for="validationServerUsername" className="form-label">
//                     Username
//                   </label>
//                   <div className="input-group has-validation">
//                     <span className="input-group-text" id="inputGroupPrepend3">
//                       @
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control is-invalid"
//                       id="validationServerUsername"
//                       aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
//                       required
//                     />
//                     <div
//                       id="validationServerUsernameFeedback"
//                       className="invalid-feedback"
//                     >
//                       Incorrect username
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <label for="validationServer03" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control is-invalid"
//                     id="validationServer03"
//                     aria-describedby="validationServer03Feedback"
//                     required
//                   />
//                   <div
//                     id="validationServer03Feedback"
//                     className="invalid-feedback"
//                   >
//                     Incorrect password
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <button className="btn btn-primary" type="submit">
//                     Submit form
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 className="btn btn-primary"
//                 data-bs-target="#loginModalToggle2"
//                 data-bs-toggle="modal"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="modal fade"
//         id="loginModalToggle2"
//         aria-hidden="true"
//         aria-labelledby="loginModalToggleLabel2"
//         tabindex="-1"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="loginModalToggleLabel2">
//                 Register Pool
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form className="row g-3">
//                 <div className="col-md-4">
//                   <label for="validationDefault01" className="form-label">
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="validationDefault01"
//                     value="Mark"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label for="validationDefault02" className="form-label">
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="validationDefault02"
//                     value="Otto"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <label for="validationDefaultUsername" className="form-label">
//                     Username
//                   </label>
//                   <div className="input-group">
//                     <span className="input-group-text" id="inputGroupPrepend2">
//                       @
//                     </span>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="validationDefaultUsername"
//                       aria-describedby="inputGroupPrepend2"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <label for="validationDefault03" className="form-label">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="validationDefault03"
//                     required
//                   />
//                 </div>
//                 <div className="col-md-3">
//                   <label for="validationDefault04" className="form-label">
//                     State
//                   </label>
//                   <select
//                     className="form-select"
//                     id="validationDefault04"
//                     required
//                   >
//                     <option selected disabled value="">
//                       Choose...
//                     </option>
//                     <option>Colorado</option>
//                     <option>Not Colorado</option>
//                   </select>
//                 </div>
//                 <div className="col-md-3">
//                   <label for="validationDefault05" className="form-label">
//                     Zip
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="validationDefault05"
//                     required
//                   />
//                 </div>
//                 <div className="col-12">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id="invalidCheck2"
//                       required
//                     />
//                     <label className="form-check-label" for="invalidCheck2">
//                       Agree to terms and conditions
//                     </label>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <button className="btn btn-primary" type="submit">
//                     Register
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-dark"
//                 data-bs-toggle="modal"
//                 data-bs-target="#loginModal"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// }
