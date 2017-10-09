import React from 'react';

export default class About extends React.Component {
    render() {
        return(
            <section className="section section-updates bg-primary text-light">
                <div className="container grid-lg">
                    <div className="columns">
                        <div className="column col-4 col-xs-12 text-center">
                            <img alt="profile" src="https://avatars1.githubusercontent.com/u/17385665?v=4&s=460" className="img-responsive circle"></img>
                        </div>
                        <div className="column col-8 col-xs-12">
                            <h2>About me</h2>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                                autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae
                                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}