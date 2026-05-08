import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

type ConfirmDialogProps = {
  open: boolean;

  title: string;

  message: string;

  onConfirm: () => void;

  onClose: () => void;
};

const ConfirmDialog = ({
  open,
  title,
  message,
  onConfirm,
  onClose,
}: ConfirmDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >

      <DialogTitle>
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={onConfirm}
        >
          Confirm
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default ConfirmDialog;