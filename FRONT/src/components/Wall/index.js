import Input from "../inputForm/inputs";
import Textarea from "../inputForm/textarea";

const Wall = () => {

  return (
    <div>
      <h1>page Projet</h1>
      <form>
        vdfvdfvdfv
        <Input type="text"/>
        <Textarea />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <input className="btn btn-submit-txt" type="submit" value="Valider"/>
        <input className="btn btn-submit" type="submit" value=""/>
        <button className="btn btn-change" type="button" >Modifier</button>
        <button className="btn btn-see" type="button" >Voir</button>
        <button className="btn btn-info" type="button" >info</button>
        <button className="btn btn-add" type="button" >Ajouter</button>
        <button className="btn btn-delete" type="button" >Supprimer</button>
        <button className="btn btn-delete-txt" type="button" >Supprimer</button>
      </form>
      
      <form className="dark">
        vdfvdfvdfv
        <Input type="text"/>
      </form>
    </div>
  )
};
export default Wall;
