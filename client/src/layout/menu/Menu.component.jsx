import { ListGroup } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MenuComponent = (props) => {
  const { t } = props;

  const menuData = [
    {
      text: "Start",
      link: "/badges",
      class: "primary",
    },
    {
      text: "main.menu.rm",
      link: "/api",
      class: "primary",
    },

    {
      text: "main.menu.monsters",
      link: "/monsters",
      class: "primary",
    },
    {
      text: "main.menu.react",
      link: "/formReact",
      class: "primary",
    },
    {
      text: "main.menu.formik",
      link: "/formFormik",
      class: "primary",
    },
    {
      text: "main.menu.formikYup",
      link: "/formFormikYUP",
      class: "primary",
    },
    {
      text: "main.menu.formikYupHCO",
      link: "/formFormikYUPHCO",
      class: "primary",
    },
    {
      text: "main.menu.geolocation",
      link: "/geolocation",
      class: "primary",
    },
    {
      text: "main.menu.shop",
      link: "/shop",
      class: "success",
    },
  ];

  return (
    <ListGroup>
      {menuData.map((item) => [
        <Link key={item.text} to={item.link}>
          <ListGroup.Item action href={item.link} variant={item.class}>
            {t(item.text)}
          </ListGroup.Item>
        </Link>,
      ])}
    </ListGroup>
  );
};

export default withTranslation()(MenuComponent);
