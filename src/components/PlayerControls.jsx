import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Tooltip from "@mui/material/Tooltip";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Popover from "@mui/material/Popover";
import PropTypes from "prop-types";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "primary",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const PlayerControls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onFastForward,
      muted,
      onMuted,
      onVolumeChange,
      onVolumeSeekUp,
      volume,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
      onChangeDisplayFormat,
      onBookmark,
    },
    ref
  ) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant="h5" style={{ color: "#fff" }}>
              Video Title
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={onBookmark}
              variant="contained"
              color="primary"
              startIcon={<BookmarkIcon />}
            >
              Bookmark
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            onClick={onRewind}
            style={{
              color: "#777",
              fontSize: 50,
              transform: "scale(0.9)",
              "&:hover": {
                color: "#fff",
                transform: "scale(1)",
              },
            }}
            aria-label="required"
          >
            <FastRewindIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            onClick={onPlayPause}
            style={{
              color: "#777",
              fontSize: 50,
              transform: "scale(0.9)",
              "&:hover": {
                color: "#fff",
                transform: "scale(1)",
              },
            }}
            aria-label="required"
          >
            {playing ? (
              <PauseIcon fontSize="inherit" />
            ) : (
              <PlayArrowIcon fontSize="inherit" />
            )}
          </IconButton>

          <IconButton
            onClick={onFastForward}
            style={{
              color: "#777",
              fontSize: 50,
              transform: "scale(0.9)",
              "&:hover": {
                color: "#fff",
                transform: "scale(1)",
              },
            }}
            aria-label="required"
          >
            <FastForwardIcon fontSize="inherit" />
          </IconButton>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              valueLabelDisplay="auto"
              components={{
                ValueLabel: (props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                ),
              }}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" direction="row">
              <IconButton
                onClick={onPlayPause}
                style={{
                  color: "#999",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {playing ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
              </IconButton>

              <IconButton
                onClick={onMuted}
                style={{
                  color: "#999",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {muted ? (
                  <VolumeOffIcon fontSize="large" />
                ) : (
                  <VolumeUpIcon fontSize="large" />
                )}
              </IconButton>
              <Slider
                size="small"
                min={0}
                max={100}
                value={volume * 100}
                style={{ width: 100 }}
                onChange={onVolumeChange}
                onChangeCommitted={onVolumeSeekUp}
              />

              <Button
                onClick={onChangeDisplayFormat}
                variant="text"
                style={{ marginLeft: 16, color: "#fff" }}
              >
                <Typography>
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={handlePopover}
              style={{
                color: "#999",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              <Typography>{playbackRate}x</Typography>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Grid container direction="column-reverse">
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <Button
                    onClick={() => onPlaybackRateChange(rate)}
                    variant="text"
                    key={rate.toString()}
                  >
                    <Typography
                      color={rate === playbackRate ? "secondary" : "default"}
                    >
                      {rate}
                    </Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>

            <IconButton
              onClick={onToggleFullScreen}
              style={{
                color: "#999",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              <FullscreenIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default PlayerControls;
