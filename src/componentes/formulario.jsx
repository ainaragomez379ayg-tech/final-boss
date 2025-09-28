import { useState } from "react";
import "./formulario.css";

export default function Formulario() {
  const [productos, setProductos] = useState({
    gorra: 0,
    gafas: 0,
    medias: 0,
    auriculares: 0,
  });

  // Maneja cambio de cantidad
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductos({ ...productos, [name]: Number(value) });
  };

  // Calcula productos seleccionados
  const productosSeleccionados = Object.entries(productos).filter(
    ([key, cantidad]) => cantidad > 0
  );

  return (
    <>
      <h1>Formulario de Inscripción - Maratón</h1>
      <form id="inscripcion" action="#" method="post">
        <h3>Datos personales</h3>

        {/* Campos existentes */}
        <p>
          <br />Nombre completo
          <br />
          <label>
            <input type="text" />
          </label>
           <br />Teléfono:
           <br /><label>
            <input type="text" />
            <br /> Ingrese su email
            <br /> <label>
              <input type="email" />
            </label>
           </label>
          <br />¿Padece alguna enfermedad crónica?
          <br />
          <label>
            <input type="radio" name="enf_cronica" value="Sí" required /> Sí
          </label>
          <br />
          <label>
            <input type="radio" name="enf_cronica" value="No" /> No
          </label>
        </p>

        <p>
          <label>
            Si respondió “Sí”, especificar:
            <br />
            <input name="especificar_enf" type="text" />
          </label>
        </p>

        <p>
          ¿Está bajo tratamiento médico actualmente?
          <br />
          <label>
            <input type="radio" name="tratamiento" value="Sí" required /> Sí
          </label>
          <br />
          <label>
            <input type="radio" name="tratamiento" value="No" /> No
          </label>
        </p>

        <p>
          <label>
            Medicación:
            <br />
            <input name="medicacion" type="text" />
          </label>
        </p>

        <p>
          <label>
            Alergias (medicamentos, alimentos, etc.):
            <br />
            <input name="alergias" type="text" />
          </label>
        </p>

        <p>
          <label>
            Grupo sanguíneo:
            <br />
            <input name="grupo_sangre" type="text" />
          </label>
        </p>

        <h3>Contacto de emergencia</h3>

        <p>
          <label>
            Nombre y apellido:
            <br />
            <input name="emerg_nombre" type="text" required />
          </label>
        </p>

        <p>
          <label>
            Teléfono:
            <br />
            <input name="emerg_telefono" type="tel" required />
          </label>
        </p>

        <p>
          <label>
            Vínculo:
            <br />
            <input name="emerg_vinculo" type="text" />
          </label>
        </p>

        {/* NUEVO: Productos con cantidades */}
        <h3>Productos adicionales</h3>
        <p>
          Elige los productos que deseas comprar:
        </p>
        {["gorra", "gafas", "medias", "auriculares"].map((prod) => (
          <p key={prod}>
            <label>
              <input
                type="checkbox"
                checked={productos[prod] > 0}
                onChange={(e) =>
                  setProductos({
                    ...productos,
                    [prod]: e.target.checked ? 1 : 0,
                  })
                }
              />
              {prod.charAt(0).toUpperCase() + prod.slice(1)}
            </label>
            {productos[prod] > 0 && (
              <input
                type="number"
                min="1"
                name={prod}
                value={productos[prod]}
                onChange={handleChange}
                style={{ width: "60px", marginLeft: "10px" }}
              />
            )}
          </p>
        ))}

        {/* Mini carrito */}
        {productosSeleccionados.length > 0 && (
          <div className="carrito">
            <h4>Mini Carrito:</h4>
            <ul>
              {productosSeleccionados.map(([nombre, cantidad]) => (
                <li key={nombre}>
                  {nombre.charAt(0).toUpperCase() + nombre.slice(1)}: {cantidad}
                </li>
              ))}
            </ul>
          </div>
        )}


        <h3>Declaración y aceptación</h3>
        <p>
          Declaro bajo juramento que los datos proporcionados son verídicos y
          que me encuentro en condiciones físicas adecuadas para participar en
          la Maratón.
          <br />
          Eximo a la organización, sponsors y autoridades de cualquier
          responsabilidad por accidentes, lesiones o daños que pudieran ocurrir
          durante la competencia.
          <br />
          Acepto el reglamento oficial de la carrera y autorizo el uso de mi
          imagen en fotografías y videos tomados durante el evento para fines
          promocionales.
        </p>

        <p>
          <label>
            <input type="checkbox" name="acepta" required /> Acepto y firmo la
            declaración
          </label>
        </p>

        <p>
          <button type="submit">Enviar inscripción</button>
        </p>
      </form>
    </>
  );
}
