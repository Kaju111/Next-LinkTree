import { AnimatePresence } from 'framer-motion';
import React from 'react'
import LinkTreeCard from './LinkTreeCard';

const LinkTree = () => {
    const {name, avater, bio, links} = data;
  return (
    <>
        <section>
            <img src={avater} alt=''/>    
            <h2>{name ? name : 'No Username'}</h2>
            <p>{bio}</p>
            <div>
                <AnimatePresence>
                    {links.map((link, index)=>(
                        <motion.div
                        key="modal"
                        initial = {{ opacity: 0, y:40 }}
                        animate = {{opacity: 1, y:0, transition:{delay: index * 0.1 + 0.5}}}
                        >
                            <LinkTreeCard title={link.title} url={link.url} image={link.image}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section> 
    </>
  )
}

export default LinkTree




