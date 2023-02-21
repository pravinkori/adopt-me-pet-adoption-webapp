import { Button } from '@cred/neopop-web/lib/components';

const ButtonNeo = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            Submit
        </Button>
    );
};

export default ButtonNeo;