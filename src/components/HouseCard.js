import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../css/HouseCard.css";

export default class HouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      favourite: false,
    };
    this.expandClick = this.expandClick.bind(this);
    this.favouriteClick = this.favouriteClick.bind(this);
  }

  expandClick = () => this.setState({ expanded: !this.state.expanded });

  favouriteClick = () => this.setState({ favourite: !this.state.favourite });

  render() {
    return (
      <div className="housecard-container">
        <Card className="root">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className="avatar">
                P
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.city || "City"}
            subheader={this.props.address || "Address"}
          />
          <CardMedia
            className="media"
            image={this.props.image || "Image"}
            title="Imagen de la casa"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.shortDescription || "Description"}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={() => this.favouriteClick()}>
              <FavoriteIcon className={this.state.favourite ? "favourite" : null} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={!this.state.expanded ? "expanded" : "expandOpen"}
              aria-expanded="expanded"
              aria-label="show more"
              onClick={() => this.expandClick()}>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Descripción</Typography>
              <Typography paragraph>{this.props.description || "Full description"}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}
