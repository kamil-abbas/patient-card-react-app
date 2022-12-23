import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Kart qeydiyyatdan keçdi.");

    let form = document.querySelector("form");
    let labels = document.querySelectorAll("label");

    labels.forEach((item, index) => {
      let data = new FormData(form);

      let a = item.innerText;
      let b = data.get(document.querySelectorAll(".patient")[index].name);
      console.log(a + " " + b);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <div>Xəstənin tam adı:</div>
              <div>
                <input
                  className="patient"
                  name="fullName"
                  type=""
                  placeholder=""
                  required
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Vəsiqə seriyası və nömrəsi:</div>
              <div>
                <input
                  className="patient"
                  name="serie"
                  type=""
                  placeholder=""
                  required
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Cinsi:</div>
              <div>
                <input
                  className="patient"
                  name="gender"
                  type=""
                  placeholder=""
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Yaş:</div>
              <div>
                <input className="patient" name="age" type="" placeholder="" />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Email ünvanı:</div>
              <div>
                <input
                  className="patient"
                  name="email"
                  type=""
                  placeholder=""
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Telefon nömrəsi:</div>
              <div>
                <input
                  className="patient"
                  name="phone-number"
                  type=""
                  placeholder=""
                />
              </div>
            </label>
          </div>

          <div>
            <label>
              <div>Simptomların təsviri:</div>
              <div>
                <input
                  className="patient"
                  name="symptoms"
                  type="text"
                  placeholder=""
                />
              </div>
            </label>
          </div>

          <div>
            <label className="checkbox-label">
              <div>Təkrar qəbul:</div>
              <div>
                <input
                  className="patient"
                  id="checkbox"
                  name="checkbox"
                  type="hidden"
                  value="Xeyr"
                />
                <input
                  className="patient checkbox"
                  name="checkbox"
                  type="checkbox"
                  value="Bəli"
                />
              </div>
            </label>
          </div>

          <div>
            <button type="submit">Göndər</button>
            <p></p>
          </div>
        </form>
      </div>
    );
  }
}
