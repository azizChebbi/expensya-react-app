/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import { ExportService } from '../../../ClientApp/src/shared/services/export-service/export.service';
// import { LoggerService } from '../../../ClientApp/src/shared/services/logger-service/logger.service';
// import { TranslationService } from '../../../ClientApp/src/shared/services/translation-service/translation.service';
// import { ConfigService } from '../Services/ConfigService';
// import { InvoicesService } from '../Services/InvoicesService';
// import { ModalService } from '../Services/ModalService';
// import { UsersService } from '../Services/UsersService';
// import { VehiclesSortBy } from '../Model/VehiclesSortBy';
import {
  FaChevronDown,
  FaChevronUp,
  FaSearchLocation,
  FaPaperclip,
} from 'react-icons/fa';
import { any } from 'prop-types';

enum VehiclesSortBy {
  None = 0,
  DateCreation = 10,
  Name = 20,
  CoveredKm = 30, //FIXME: not supported
  CreationYearKm = 40,
  AdministrativePower = 50,
  VehicleType = 60,
  IsActive = 70,
  OwnerFullName = 80,
  AssignmentState = 90,
  State = 100,
}

interface VehiclesListProps {
  vehicles: unknown;
  services: any;
}

// export default function VehiclesListReact() {
//   return <div>vehicles list</div>;
// }

export default function VehiclesListReact({
  vehicles,
  services,
}: VehiclesListProps) {
  const loggerService: any = services.LoggerService;
  const translationService: any = services.TranslationService;
  const configService: any = services.ConfigService;
  const usersService: any = services.UsersService;
  const invoicesService: any = services.InvoicesService;
  const exportService: any = services.ExportService;
  const modalService: any = services.ModalService;

  console.log(services);

  // return <div>hello world</div>;

  // const [isAllItemsSelected, setIsAllItemsSelected] = useState(false);

  // Placeholder functions
  //   const GetVehicleTypeFromEnum = (type) => {
  //     const types = {
  //       1: { Name: 'Sedan', Picture: '/sedan-icon.png' },
  //       2: { Name: 'Truck', Picture: '/truck-icon.png' },
  //       3: { Name: 'Electric', Picture: '/electric-icon.png' },
  //     };
  //     return types[type] || { Name: 'Unknown', Picture: '/unknown-icon.png' };
  //   };

  const handleSelectAll = () => {
    // setIsAllItemsSelected(!isAllItemsSelected);
    // Call usersService.selectAllVehicles()
  };

  const handleSelectVehicle = (vehicle: any) => {
    // Call usersService.updateAllVehiclesSelected(vehicle)
  };

  const getSortIcon = (sortBy: any, sortDirection: string) => {
    if (sortDirection === 'asc') {
      return <FaChevronUp />;
    } else {
      return <FaChevronDown />;
    }
  };

  const isCurrentViewAdminProVehicle = () => {
    // Call usersService.isCurrentViewAdminProVehicle()
    return false;
  };

  const shouldShowVehicleOwnerColumn = () => {
    // Call usersService.shouldShowVehicleOwnerColumn()
    return true;
  };

  const getAssignmentText = (assignmentState: any) => {
    // Call usersService.getAssignmentText(assignmentState)
    return 'Assigned';
  };

  const getAdministrativePowerStr = (vehicle: any) => {
    // Call usersService.getAdministrativePowerStr(vehicle)
    return 'Admin Power';
  };

  const getCurrentYearDistanceStr = (vehicle: any) => {
    // Call usersService.getCurrentYearDistanceStr(vehicle)
    return '10,000 km';
  };

  const shouldShowDeactivatedBadge = (isActive: boolean) => {
    // Call usersService.shouldShowDeactivatedBadge(isActive)
    return !isActive;
  };

  const getVehiclesSortInContext = () => {
    console.log('test');
  };

  const changeVehicleSorting = (sortedColumn: VehiclesSortBy) => {
    console.log('test');
  };

  const getSortedState = () => {
    return VehiclesSortBy.AdministrativePower;
  };

  const StatusTag = ({
    stateStr,
    stateStyle,
    title,
  }: {
    stateStr: any;
    stateStyle: any;
    title: any;
  }) => (
    <span className={`status-tag ${stateStyle}`} title={title}>
      {stateStr}
    </span>
  );

  return (
    <div className="col-md-12 table-responsive">
      <div className="col-xs-12">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                {!isCurrentViewAdminProVehicle() && (
                  <th>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          // checked={isAllItemsSelected}
                          onChange={handleSelectAll}
                        />{' '}
                        Select All
                      </label>
                    </div>
                  </th>
                )}
                <th>Attachments</th>
                <th
                  className="sortable"
                  onClick={() =>
                    changeVehicleSorting(usersService.getVehiclesSortBy().Name)
                  }
                >
                  Name{' '}
                  {getSortIcon(usersService.getVehiclesSortBy().Name, 'test')}
                </th>
                {shouldShowVehicleOwnerColumn() && (
                  <th
                    className="sortable"
                    onClick={() =>
                      changeVehicleSorting(
                        usersService.getVehiclesSortBy().OwnerFullName,
                      )
                    }
                  >
                    Owner{' '}
                    {getSortIcon(
                      usersService.getVehiclesSortBy().OwnerFullName,
                      'test',
                    )}
                  </th>
                )}
                {isCurrentViewAdminProVehicle() && <th>External ID</th>}
                <th
                  className="sortable"
                  onClick={() =>
                    changeVehicleSorting(
                      usersService.getVehiclesSortBy().DateCreation,
                    )
                  }
                >
                  Created{' '}
                  {getSortIcon(
                    usersService.getVehiclesSortBy().DateCreation,
                    'test',
                  )}
                </th>
                <th
                  className="sortable"
                  onClick={() =>
                    changeVehicleSorting(
                      usersService.getVehiclesSortBy().VehicleType,
                    )
                  }
                >
                  Type{' '}
                  {getSortIcon(
                    usersService.getVehiclesSortBy().VehicleType,
                    'test',
                  )}
                </th>
                {isCurrentViewAdminProVehicle() && (
                  <th>
                    <span
                      className="d-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Tags"
                    >
                      Tags
                    </span>
                  </th>
                )}
                {isCurrentViewAdminProVehicle() && (
                  <th
                    className="sortable"
                    onClick={() =>
                      changeVehicleSorting(
                        usersService.getVehiclesSortBy().AssignmentState,
                      )
                    }
                  >
                    Assignment{' '}
                    {getSortIcon(
                      usersService.getVehiclesSortBy().AssignmentState,
                      'test',
                    )}
                  </th>
                )}
                {isCurrentViewAdminProVehicle() && <th>Start Date</th>}
                {isCurrentViewAdminProVehicle() && <th>End Date</th>}
                {!isCurrentViewAdminProVehicle() && (
                  <th
                    className="sortable"
                    onClick={() =>
                      changeVehicleSorting(
                        usersService.getVehiclesSortBy().AdministrativePower,
                      )
                    }
                  >
                    Administrative Power{' '}
                    {getSortIcon(
                      usersService.getVehiclesSortBy().AdministrativePower,
                      'test',
                    )}
                  </th>
                )}
                <th>Current Year Distance</th>
                <th
                  className="sortable"
                  onClick={() => changeVehicleSorting(getSortedState())}
                >
                  State {getSortIcon(getSortedState(), 'test')}
                </th>
              </tr>
            </thead>
            <tbody>
              {(vehicles as any).map(
                (
                  vehicle: {
                    Id: React.Key | null | undefined;
                    IsChecked: boolean | undefined;
                    Name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined;
                    AttachedFilesCount: number;
                    OwnerFullName:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                    ExternalId:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                    DateCreation: any;
                    IsActive: boolean;
                    TooltipStateStr: any;
                    Tags: any[];
                    TagsStrToDisplay:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                    AssignmentState: any;
                    StartDate: any;
                    EndDate: any;
                    StateStr: any;
                    StateStyle: any;
                  },
                  index: number,
                ) => (
                  <tr
                    key={vehicle.Id}
                    className={`${vehicle.IsChecked ? 'selected-row' : ''} ${index % 2 === 0 ? 'even' : 'odd'}`}
                    tabIndex={0}
                    onClick={() => {
                      console.log('reroute');
                    }}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && console.log('reroute')
                    }
                  >
                    {!usersService.isReadOnlyAdminInContext && (
                      <td onClick={(e) => e.stopPropagation()}>
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            id={`checkboxInput${vehicle.Id}`}
                            checked={vehicle.IsChecked}
                            onChange={() => console.log('change')}
                            aria-label={`${translationService.t('vehicle.checkbox.select.ariaLabel')} ${vehicle.Name}`}
                          />
                          <label htmlFor={`checkboxInput${vehicle.Id}`}></label>
                        </div>
                      </td>
                    )}
                    <td className="invoiceTypes">
                      {vehicle.AttachedFilesCount > 0 && (
                        <span title="test">
                          <FaPaperclip />
                        </span>
                      )}
                    </td>
                    <td>
                      <div title={vehicle.Name as string}>{vehicle.Name}</div>
                    </td>
                    {shouldShowVehicleOwnerColumn() && (
                      <td className="text-left">{vehicle.OwnerFullName}</td>
                    )}
                    {isCurrentViewAdminProVehicle() && (
                      <td className="text-left">{vehicle.ExternalId}</td>
                    )}
                    <td className="text-left">
                      {configService.displayDate(
                        configService.fromMSJsonDate(vehicle.DateCreation),
                      )}
                    </td>
                    <td className="text-left">
                      {/* image tag */}
                      {shouldShowDeactivatedBadge(vehicle.IsActive) && (
                        <StatusTag
                          stateStr={translationService.t(
                            'vehicle.state.value.false',
                          )}
                          stateStyle={''}
                          title={vehicle.TooltipStateStr}
                        />
                      )}
                    </td>
                    {isCurrentViewAdminProVehicle() && (
                      <td>
                        <span
                          className="text-is-overflow"
                          title={vehicle.Tags ? vehicle.Tags.join(', ') : ''}
                        >
                          {vehicle.TagsStrToDisplay}
                        </span>
                      </td>
                    )}
                    {isCurrentViewAdminProVehicle() && (
                      <td className="text-left">
                        <span
                          title={
                            // eslint-disable-next-line no-constant-condition
                            true
                              ? translationService.t(
                                  'vehicle.futurAffectationState.tooltip',
                                )
                              : ''
                          }
                        >
                          {getAssignmentText(vehicle.AssignmentState)}
                        </span>
                      </td>
                    )}
                    {isCurrentViewAdminProVehicle() && (
                      <td className="text-left">
                        {configService.displayDate(
                          configService.fromMSJsonDate(vehicle.StartDate),
                        )}
                      </td>
                    )}
                    {isCurrentViewAdminProVehicle() && (
                      <td className="text-left">
                        {configService.displayDate(
                          configService.fromMSJsonDate(vehicle.EndDate),
                        )}
                      </td>
                    )}
                    {!isCurrentViewAdminProVehicle() && (
                      <td className="text-left">
                        {getAdministrativePowerStr(vehicle)}
                      </td>
                    )}
                    <td className="text-left">
                      {getCurrentYearDistanceStr(vehicle)}
                    </td>
                    <td>
                      <StatusTag
                        stateStr={vehicle.StateStr}
                        stateStyle={vehicle.StateStyle}
                        title={
                          !shouldShowDeactivatedBadge(vehicle.IsActive)
                            ? vehicle.TooltipStateStr
                            : ''
                        }
                      />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
VehiclesListReact.propTypes = {
  vehicles: any,
  services: any,
};
