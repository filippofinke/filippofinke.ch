import React from "react";

const ContactsList = () => {
  let contacts = [
    {
      name: "GitHub",
      username: "@filippofinke",
      url: "https://github.com/filippofinke",
    },
    {
      name: "LinkedIn",
      username: "@filippofinke",
      url: "https://www.linkedin.com/in/filippofinke/",
    },
    {
      name: "Email",
      username: "filippofinke@protonmail.ch",
      url: "mailto:filippofinke@protonmail.ch",
    },
  ];

  return (
    <div>
      {contacts.map(({ name, username, url }) => {
        return (
          <React.Fragment key={name}>
            <br />

            <h3>
              {name}
              <br />
              <a href={url} rel="noreferrer" target="_blank">
                <span>{username}</span>
              </a>
            </h3>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ContactsList;
