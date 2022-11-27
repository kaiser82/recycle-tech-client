import React from 'react';
import pic from '../../assets/blog.jpeg'

const Blogs = () => {
    return (
        <div className='space-y-10 my-5 '>
            <h2 className='text-4xl font-bold text-center py-5'>Blogs For Tech Lovers</h2>
            <div className=" p-6 overflow-hidden rounded-lg shadow-lg">
                <article>
                    <h2 className="text-xl font-bold">What are the different ways to manage a state in a React application?</h2>
                    <p className="mt-4 ">In React apps, there are at least seven ways to handle the state. <br />
                        <strong>URL: </strong> We can use URL to store some data.Keeping such data in the URL allows users to share deep links with others. <br />
                        <strong>Web Storage:</strong> The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage. <br />
                        <strong>Local State: </strong> The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. <br />
                        <strong>Lifted State: </strong> The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. <br />
                        <strong>Derived State:</strong> The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.

                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={pic} alt="" className="w-10 h-10 rounded-full " />
                        <div>
                            <h3 className="text-sm font-medium">Black Jack</h3>
                            <time dateTime="2022-11-27" className="text-sm ">Nov 27th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow-lg">
                <article>
                    <h2 className="text-xl font-bold">How does prototypical inheritance work?</h2>
                    <p className="mt-4 ">Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                        All JavaScript objects inherit properties and methods from a prototype:

                        Date objects inherit from Date.prototype.
                        Array objects inherit from Array.prototype.
                        Player objects inherit from Player.prototype.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={pic} alt="" className="w-10 h-10 rounded-full " />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time dateTime="2021-02-18" className="text-sm ">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow-lg">
                <article>
                    <h2 className="text-xl font-bold">What is a unit test? Why should we write unit tests?</h2>
                    <p className="mt-4 ">
                        A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended.

                        Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won't fail due to problems integrating with those external services.
                    </p>
                    <p className="mt-4 ">
                        Benefits of Unit Tests:

                        Unit tests help to find and fix bugs quickly and easily.
                        Unit tests contribute to higher code quality.
                        Unit tests contribute to better application architecture.
                        Unit tests act as documentation.

                        The main advantage of unit tests is their laser-sharp focus. Since they test a single function, they give precise feedback. If a unit test fails, then in the vast majority of cases testers can be sure that the specific function being tested is the problem.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={pic} alt="" className="w-10 h-10 rounded-full " />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time dateTime="2021-02-18" className="text-sm ">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow-lg">
                <article>
                    <h2 className="text-xl font-bold">React vs. Angular vs. Vue?</h2>
                    <p className="mt-4 ">
                        <strong>React: </strong>
                        React is an open-source, front-end library developed by Facebook that’s used for creating web and mobile applications. React is termed as a library because, in an MVC architecture, it’s only the view layer and not a complete architecture.
                        The plus point here is that React is very flexible and can be connected with several packages that have been developed for it, which helps in the development of a complete application.

                    </p>
                    <p className='mt-4'>
                        <strong>Angular: </strong>
                        Angular is an open-source, front-end framework developed by Google, used for creating web applications. Angular is termed as a framework because it includes enough functionality out of the box for the development of a complete web application.
                        The advantage here is that you don’t need to go through packages and then select from those. Instead, you can start working directly without worrying about adding functionalities via different packages.

                    </p>
                    <p className='mt-4'>
                        <strong>Vue: </strong>
                        Vue is an open-source, front-end library developed by Evan You, an ex-Google employee. Vue is used for creating web applications, and like React, it’s not a complete MVC framework.
                        The packages developed for Vue are lesser than that of React due to its lower popularity, which makes it a challenge to select packages that provide functionality relevant to a particular scenario.

                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src={pic} alt="" className="w-10 h-10 rounded-full " />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time dateTime="2021-02-18" className="text-sm ">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default Blogs;