import React from "react";
import PageHeader from "../../components/page-header"
import { BsFillProjectorFill } from "react-icons/bs";
import "./styles.scss";
import { projectFilterData, projectData } from "../../utils/utility";



const Projects = () => {
    const [filteredvalue, setFilteredValue] = React.useState(1);
    const [hoveredValue, setHoveredValue] = React.useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }


    const filteredItems =
        filteredvalue === 1
            ? projectData
            : projectData.filter((item) => item.id === filteredvalue);

    console.log(filteredItems);

    return (
        <section id="project" className="project">
            <PageHeader
                heading="My Personal Projects"
                icon={<BsFillProjectorFill size={40} />}
            />
            <div className="project__content">
                <ul className="project__content__filter">
                    {projectFilterData.map((item) => (
                        <li
                            className={item.filterId === filteredvalue ? "active" : ""}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="project__content__cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className="project__content__cards__item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="project__content__cards__item__img-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image} />
                                </a>
                            </div>
                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p>
                                            {item.name}
                                        </p>
                                        <a href={item.link} target="_blank">
                                            <button >
                                                Visit
                                            </button>
                                        </a>
                                        <a href={item.repository} target="_blank">
                                            <button >
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects
