import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Project from '~/components/Project';
import projects_data from '~/data/projects';
import SkillBox from '~/components/SkillBox';
import { skills, tools } from '~/data/skills';
import { Trans, useTranslation } from 'react-i18next';
import links from '~/Link';

const cs = classNames.bind(styles);
const first_3_projects = projects_data.slice(0, 3);

function Home() {
    const { t } = useTranslation();
    return (
        <>
            <div className={cs('information')}>
                <div className={cs('information-content')}>
                    <h1 className={cs('information-title')}>
                        <Trans components={{ bold: <span /> }}>Home.title</Trans>
                    </h1>
                    <p className={cs('information-desc')}>{t('Home.sub-title')}</p>
                    <Button
                        to="/contact"
                        className={cs(t('Home.button-contact').length > 13 ? 'button-contact-vi' : 'button-contact')}
                    >
                        {t('Home.button-contact')}
                    </Button>
                </div>
                <div className={cs('information-image')}>
                    <img src={images.outlineLogo} className={cs('information-outline-logo')} alt="Avatar" />
                    <img src={images.avatar} className={cs('information-avatar')} alt="Avatar" />
                    <div className={cs('information-status')}>
                        <Trans
                            components={{
                                a: (
                                    <a target="_blank" rel="noreferrer" href="https://www.is.vnu.edu.vn/">
                                        {}
                                    </a>
                                ),
                            }}
                        >
                            Home.job
                        </Trans>
                    </div>

                    <img src={images.dot1} className={cs('information-dots')} alt="Avatar" />
                </div>
            </div>
            <figure className={cs('quote')}>
                <blockquote className={cs('quote-text')}>{t('Home.quote')}</blockquote>
                <figcaption className={cs('quote-author')}>{t('Home.author')}</figcaption>
            </figure>
            <div className={cs('projects')}>
                <div className={cs('projects-header')}>
                    <h2 className={cs('h2')}>{t('Home.project')}</h2>
                    <a href="/projects" className={cs('projects-header__link')}>
                        {t('Home.view-all')}
                    </a>
                </div>
                <div className={cs('project-list')}>
                    {first_3_projects.map((project, index) => (
                        <Project
                            key={index}
                            image={project.image}
                            projectTechUsed={project.projectTechUsed}
                            projectContent={project.projectContent}
                            projectLinks={project.projectLinks}
                        />
                    ))}
                </div>
            </div>
            <div className={cs('skills')}>
                <h2 className={cs('h2')}>{t('Home.skill.heading')}</h2>
                <div className={cs('skills-content')}>
                    <h1>
                        <Trans components={{ bold: <strong /> }}>Home.skill.part1</Trans>
                    </h1>
                    <div className={cs('my-skills')}>
                        {skills.map((skill, index) => (
                            <SkillBox key={index} image={skill.image} name={skill.name} />
                        ))}
                    </div>
                    <h1>
                        <Trans components={{ bold: <strong /> }}>Home.skill.part2</Trans>
                    </h1>
                    <div className={cs('tools')}>
                        {tools.map((skill, index) => (
                            <SkillBox key={index} image={skill.image} name={skill.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={cs('about')}>
                <div className={cs('about-content')}>
                    <h2 className={cs(t('Home.about.heading').length > 5 ? 'about-header-vi' : 'about-header')}>
                        {t('Home.about.heading')}
                    </h2>
                    <div className={cs('about-content')}>
                        <p className={cs('about-desc')}>{t('Home.about.part1')}</p>
                        <p className={cs('about-desc')}>{t('Home.about.part2')}</p>
                    </div>
                    <Button medium to="/about" className={cs(t('Home.about.button').length > 11 ? '' : 'button-about')}>
                        {t('Home.about.button')}
                    </Button>
                </div>
                <img src={images.aboutMe} className={cs('about-image')} alt="avatar" />
            </div>
            <div className={cs('contact')}>
                <h2 className={cs('h2')}>{t('Home.contact.heading')}</h2>
                <div className={cs('contact-content')}>
                    <p className={cs('contact-text')}>{t('Home.contact.desc')}</p>
                    <div className={cs('contact-info')}>
                        <p className={cs('contact-info__text')}>Message me here</p>
                        <a href={links.linkedin} target="_blank" rel="noreferrer" className={cs('contact-media')}>
                            <img src={images.linkedin} alt="discord" />
                            <p>Trung Trần</p>
                        </a>
                        <a href={links.mail} target="_blank" rel="noreferrer" className={cs('contact-media')}>
                            <img src={images.mail} alt="mail" />
                            <p>baotrung06092003@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
