import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1180542165/photo/colorful-background-of-pastel-powder-explosion-rainbow-color-dust-splash-on-black-background.jpg?s=612x612&w=0&k=20&c=64yQAMVpqAJ-EUpLUIYotDg8UTpzCz1dxKLY4rSESpE="
                    alt="photo"/>
            </div>
            <div className={classes.descriptionBlock}>
                avatar
            </div>

        </div>
    )
}