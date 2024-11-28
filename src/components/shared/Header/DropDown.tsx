


interface SubMenuCursosProps {
      active: boolean; // Define el tipo explícitamente
    }

function SubMenuCursos( { active }: SubMenuCursosProps) {

     


  return (
    <div className={`${active ? 'block' : 'hidden'}`}>
      <nav>
            <li>Presencial</li>
            <li>Online</li>
            <li>Mira nuestras clases</li>
      </nav>
    </div>
  );
}

export default SubMenuCursos;