import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="email" class="form-control" placeholder="Ingresa tu Nombre..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail</label>
                        <input type="email" class="form-control" placeholder="Ingresa tu direccion de correo..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Servicio</label>
                        <select class="form-control">
                            <option>Dentaduras</option>
                            <option>Implantes</option>
                            <option>Blanqueamiento</option>
                            <option>Endodoncia</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Departamento</label>
                        <select class="form-control">
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                            <option>Select Department</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Ingrese su mensaje...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Reserva una Cita</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>SERVICIO DENTAL</p>
                            <h6>+51 943 804 665</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;