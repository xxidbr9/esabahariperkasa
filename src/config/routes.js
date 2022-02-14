import { pathPrefix } from "../../gatsby-config"

const isGithub = process.env.IS_GITHUB || false
const prefix = isGithub ? pathPrefix : ""
const routes = {
  HOME: prefix + "/",
  SERVICE: prefix + "/service",
  ABOUT: prefix + "/about",
  CONTACT: prefix + "/contact"
}

export default routes