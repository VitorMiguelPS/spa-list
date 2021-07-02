import React, { useContext, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

import { ContextCommon } from "../../contexts/common";

function ListPage() {
  const { loged } = useContext(ContextCommon);

  useEffect(() => {
    console.log(loged);
  }, [loged]);

  return (
    <Grid item>
      <Typography variant="h1">Lista de usuários</Typography>
    </Grid>
  );
}

export default ListPage;
